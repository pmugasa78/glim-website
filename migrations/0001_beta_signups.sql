-- People who asked to test Glim before launch. Signing up again with the same email updates it.
CREATE TABLE beta_signups (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	-- For Android, the Google account they use on the Play Store (closed testing invites go to it).
	email TEXT NOT NULL UNIQUE,
	suburb TEXT NOT NULL,
	phone TEXT NOT NULL CHECK (phone IN ('android', 'iphone')),
	-- Signing up requires ticking the consent box, so this is also when they consented.
	created_at TEXT NOT NULL DEFAULT (datetime('now')),
	updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
