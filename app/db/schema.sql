DROP DATABASE IF EXISTS holiday_db;

CREATE holiday_db;

USE holiday_db;

CREATE TABLE holiday (
    id not null AUTO_INCREMENT PRIMARY KEY,
    questions VARCHAR (300) NOT NULL,
    answers BOOLEAN(100) default false
    date TIMESTAMP not null DEFAULT current_timestamp,
);
