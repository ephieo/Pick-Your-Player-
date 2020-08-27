BEGIN;

    DROP TABLE IF EXISTS cards, posts
    CASCADE;

CREATE TABLE cards
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(2555),
    origin VARCHAR(255),
    powers VARCHAR(255),
    password VARCHAR(255)

);

CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES cards(id),
    text_content TEXT

);

INSERT INTO cards
    (name, location, origin, powers, password)
VALUES
    ("Oh Sehun", "South Korea", "EXO", "Maknae on top", "suho"),
    ("GON", "Whale Island", "HunterXHunter", "never gives up", "dada"),
    ("Ovie Soko", "My Dreams", "My Heart loool", "Visual", "MarryEphie");

INSERT INTO comments
    (user_id, text_content)
VALUES
    (1, "I already miss Suho"),
    (2, "I must find my father"),
    (3, "I should have won love island with Amber");

COMMIT;