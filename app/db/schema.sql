DROP DATABASE IF EXISTS holiday_db;

CREATE DATABASE holiday_db;

USE holiday_db;

CREATE TABLE quiz (
    id AUTO_INCREMENT NOT NULL PRIMARY KEY,
    question VARCHAR(244) NOT NULL, 
    userAns VARCHAR (244) NULL
)



