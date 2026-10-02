CREATE TABLE IF NOT EXISTS invoices (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  number TEXT UNIQUE NOT NULL,
  year INTEGER NOT NULL,
  seq INTEGER NOT NULL,
  order_key TEXT UNIQUE NOT NULL,
  issue_date TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  lines_json TEXT NOT NULL,
  vat_pct INTEGER NOT NULL,
  gross_cents INTEGER NOT NULL,
  net_cents INTEGER NOT NULL,
  vat_cents INTEGER NOT NULL,
  pdf_key TEXT NOT NULL,
  status TEXT NOT NULL,          -- stored | sent | send_failed
  note TEXT,
  created_at TEXT NOT NULL,
  sent_at TEXT,
  UNIQUE(year, seq)
);
CREATE TABLE IF NOT EXISTS held (   -- mails that were NOT turned into an invoice, kept so nothing is lost
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  received_at TEXT NOT NULL, subject TEXT, from_addr TEXT, reason TEXT, raw_key TEXT
);
