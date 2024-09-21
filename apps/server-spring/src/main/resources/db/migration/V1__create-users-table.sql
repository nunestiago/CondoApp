-- 
CREATE TABLE IF NOT EXISTS users
(
    username   TEXT,
    password   TEXT                NOT NULL,
    email      TEXT                NOT NULL,
    user_role  TEXT                NOT NULL,
    first_name TEXT NOT NULL,
    last_name  TEXT,
    is_active  INTEGER DEFAULT (1) NOT NULL,
    created_at INTEGER DEFAULT (datetime()),
    edited_at  INTEGER DEFAULT (datetime()),
    edited_by  TEXT                NOT NULL
);