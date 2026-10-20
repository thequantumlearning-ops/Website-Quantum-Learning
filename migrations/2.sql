-- Ambassador (affiliate) program: applications, referral codes, sales and payouts.

CREATE TABLE ambassadors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  status TEXT NOT NULL DEFAULT 'pending',          -- pending | approved | declined | deactivated
  role TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  age INTEGER NOT NULL,
  guardian_name TEXT,
  guardian_email TEXT,
  location TEXT NOT NULL,
  reach TEXT NOT NULL,
  experience TEXT,
  referral TEXT,
  payout_method TEXT,
  code TEXT UNIQUE,                                -- referral code, set on approval
  dashboard_token TEXT UNIQUE,                     -- secret for the ambassador's earnings page
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  decided_at TEXT
);

CREATE INDEX idx_ambassadors_email ON ambassadors (email);
CREATE INDEX idx_ambassadors_status ON ambassadors (status);

CREATE TABLE sales (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ambassador_id INTEGER NOT NULL REFERENCES ambassadors (id),
  stripe_session_id TEXT NOT NULL UNIQUE,
  stripe_payment_intent TEXT,
  amount_cents INTEGER NOT NULL,
  commission_cents INTEGER NOT NULL,
  refunded INTEGER NOT NULL DEFAULT 0,
  payout_id INTEGER REFERENCES payouts (id),
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_sales_ambassador ON sales (ambassador_id);
CREATE INDEX idx_sales_payment_intent ON sales (stripe_payment_intent);

CREATE TABLE payouts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ambassador_id INTEGER NOT NULL REFERENCES ambassadors (id),
  amount_cents INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'due',              -- due | paid
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  paid_at TEXT
);

CREATE INDEX idx_payouts_ambassador ON payouts (ambassador_id);
