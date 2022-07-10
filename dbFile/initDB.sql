DROP TABLE IF EXISTS FeedItems;
DROP TABLE IF EXISTS Subscriber;
DROP TABLE IF EXISTS Sources;
DROP TABLE IF EXISTS Users;

CREATE TABLE IF NOT EXISTS Users (
    id serial not null PRIMARY KEY, -- serail = auto increment
    email text not null,
    password text,
    name text not null,
    since date not null
);

