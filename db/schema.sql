### Schema

CREATE DATABASE burgers_db;
USE burgers_db;
INSERT INTO burgers (burger_name) VALUES ('Mushroom Swiss Burger');
INSERT INTO burgers (burger_name, devoured) VALUES ('Mushroom Burger', true);
INSERT INTO burgers (burger_name) VALUES ('Cheeseburger');
INSERT INTO burgers (burger_name) VALUES ('Veggie Burger');
INSERT INTO burgers (burger_name) VALUES ('Bacon Cheeseburger');

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(80) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);