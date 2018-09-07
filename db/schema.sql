CREATE DATABASE pictures_db;
USE pictures_db;

CREATE TABLE images (
    id INTEGER NOT NULL AUTO_INCREMENT,
    img_url VARCHAR(255),
    PRIMARY KEY(id)
);