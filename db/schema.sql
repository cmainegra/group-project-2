CREATE DATABASE pictures_db;
USE pictures_db;

CREATE TABLE images (
    id INTEGER AUTO INCREMENT NOT_NULL,
    img_url VARCHAR(255),
    PRIMARY KEY(id)
)