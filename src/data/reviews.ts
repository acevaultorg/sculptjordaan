/* ─── Real Google Reviews (verified from Google Maps, March 2026) ─── */
export type Review = {
  name: string;
  text: string;
  rating: number;
  date: string; // ISO YYYY-MM-DD for schema
};

export const googleReviews: Review[] = [
  {
    name: "Alina Gurzhapova",
    text: "I'm a trainer and I work with my clients in this wonderful fitness studio and I truly love it! Great location, well structured space, nice team work!",
    rating: 5,
    date: "2026-02-01",
  },
  {
    name: "Bryan van Luijken",
    text: "I give my small group Calisthenics classes here for 3 athletes. Great location! Small but nice. Has everything we need. Even free coffee and tea!",
    rating: 5,
    date: "2026-02-01",
  },
  {
    name: "Pien Buseman",
    text: "What a gift — a boutique gym with great trainers within walking distance. Small but very nice. All equipment is available, with a PT if you want, and you can also train on your own. A great addition to the neighborhood!",
    rating: 5,
    date: "2025-10-01",
  },
  {
    name: "Dara Thompson",
    text: "Great space to train my clients. Private, fully equipped, and always clean. Booking made easy with credits.",
    rating: 5,
    date: "2026-02-01",
  },
  {
    name: "Sanne Oosterhof",
    text: "I'm looking forward to SculptClub! It seems like a pleasant, small-scale place to train, without the crowds of a big gym. The location is ideal and easily accessible.",
    rating: 5,
    date: "2025-08-01",
  },
  {
    name: "Rick Schippers",
    text: "How cool that a new gym is coming to the Egelantiersgracht! A real asset for the neighborhood. I'm really looking forward to working out here — close to home.",
    rating: 5,
    date: "2025-08-01",
  },
  {
    name: "Aleksandra Nechaeva",
    text: "I live just around the corner, and am very excited to see a new training space opening up nearby. The view on the canal is gonna be unbeatable if you need extra motivation to come by and lift some weights!",
    rating: 5,
    date: "2025-08-01",
  },
  {
    name: "Kevin Berghuis",
    text: "Wow what a top location for this gym! I can't wait to start my first workout here. It's such an inspiring setting to train in!",
    rating: 5,
    date: "2025-08-01",
  },
];
