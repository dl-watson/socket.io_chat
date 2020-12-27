DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS messages;

CREATE TABLE users (
    _id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    email VARCHAR(256) NOT NULL,
    hash VARCHAR(512) NOT NULL
);

CREATE TABLE messages (
    _id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(_id),
    text TEXT NOT NULL
);


-- one hard-coded user for now
INSERT INTO users (name, email, hash)
VALUES ('dee', 'test@test.com', 'ijh2398hb2k');

-- seed heroku db with 
-- cat setup.sql | heroku pg:psql