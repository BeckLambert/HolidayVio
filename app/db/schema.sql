DROP DATABASE IF EXISTS holiday_db;
CREATE DATABASE holiday_db;

USE holiday_db;

CREATE TABLE quiz (
	id INT(10) NOT NULL  AUTO_INCREMENT PRIMARY KEY,
    question VARCHAR(244) NOT NULL,
    choice1 VARCHAR(244) NOT NULL,
    choice2 VARCHAR(244) NOT NULL,
    choice3 VARCHAR(244) NOT NULL,
    choice4 VARCHAR(244) NOT NULL,
    userAns text
);

SELECT * FROM quiz;

