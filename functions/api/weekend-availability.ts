// GET /api/weekend-availability — is there Open Gym room this weekend?
//
// Reads Acuity's PUBLIC scheduler availability (no login, books nothing) for
// the Open Gym session type (?type=gym, default) or the half-studio rental
// type (?type=studio) and answers per upcoming weekend day whether the
// morning (07-11h) and afternoon (12-16h) still have a free place. It never
// returns counts: an all-empty studio is not something to advertise.
// Shown by src/components/marketing/weekend-availability.tsx on /nl/open-gym
// and /en/open-gym. Acuity sends no CORS header, hence this same-origin proxy.
// Cached 15 min at the edge so a busy page never hammers Acuity.

const OWNER = "fba376d5"; // scheduler owner hash (not the public owner id)
const CALENDAR = "12633534";
const OPEN_GYM = "83513953";
const HALF_STUDIO = "84032351"; // any free half = the studio can still be rented
const TYPES: Record<string, string> = { gym: OPEN_GYM, studio: HALF_STUDIO };

type Slot = { time: string; slotsAvailable?: number };

const ymdAmsterdam = (d: Date) =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Amsterdam" }).format(d);
const weekdayAmsterdam = (d: Date) =>
  new Intl.DateTimeFormat("en-US", { timeZone: "Europe/Amsterdam", weekday: "short" }).format(d);

function upcomingWeekendDays(now: Date): string[] {
  const out: string[] = [];
  for (let i = 0; i < 8 && out.length < 2; i++) {
    const d = new Date(now.getTime() + i * 86400000);
    const wd = weekdayAmsterdam(d);
    if (wd === "Sat" || wd === "Sun") out.push(ymdAmsterdam(d));
  }
  return out;
}

async function dayTimes(date: string, typeId: string): Promise<Slot[] | null> {
  const u = `https://app.acuityscheduling.com/api/scheduling/v1/availability/times?owner=${OWNER}&appointmentTypeId=${typeId}&calendarId=${CALENDAR}&startDate=${date}&timezone=Europe%2FAmsterdam`;
  const r = await fetch(u, { headers: { "User-Agent": "Mozilla/5.0 (sculptclub.nl weekend-availability)" } });
  if (!r.ok) return null;
  const j = (await r.json()) as Record<string, Slot[]>;
  return Array.isArray(j?.[date]) ? j[date] : [];
}

export const onRequestGet: PagesFunction = async (context) => {
  const kind = new URL(context.request.url).searchParams.get("type") === "studio" ? "studio" : "gym";
  const cache = caches.default;
  const key = new Request(new URL(`/api/weekend-availability?type=${kind}`, context.request.url).toString());
  const hit = await cache.match(key);
  if (hit) return hit;

  const days = [];
  for (const date of upcomingWeekendDays(new Date())) {
    const times = await dayTimes(date, TYPES[kind]);
    if (times === null) {
      return new Response(JSON.stringify({ ok: false }), {
        status: 502,
        headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
      });
    }
    const hours = times
      .filter((t) => (t.slotsAvailable ?? 1) > 0)
      .map((t) => Number(t.time.slice(11, 13)));
    days.push({
      date,
      morning: hours.some((h) => h >= 7 && h <= 11),
      afternoon: hours.some((h) => h >= 12 && h <= 16),
    });
  }
  const res = new Response(JSON.stringify({ ok: true, days }), {
    headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=900" },
  });
  context.waitUntil(cache.put(key, res.clone()));
  return res;
};
