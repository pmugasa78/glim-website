-- The beta form now asks only for an email, so suburb and phone become optional.
-- SQLite can't relax a column's constraints in place, so the table is rebuilt.
CREATE TABLE beta_signups_new (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	-- For Android, ideally the Google account they use on the Play Store (closed testing invites go to it).
	email TEXT NOT NULL UNIQUE,
	suburb TEXT,
	phone TEXT CHECK (phone IN ('android', 'iphone')),
	created_at TEXT NOT NULL DEFAULT (datetime('now')),
	updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
INSERT INTO beta_signups_new (id, email, suburb, phone, created_at, updated_at)
	SELECT id, email, suburb, phone, created_at, updated_at FROM beta_signups;
DROP TABLE beta_signups;
ALTER TABLE beta_signups_new RENAME TO beta_signups;
