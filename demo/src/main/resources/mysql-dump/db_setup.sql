create database if not exists student;
use student;
create table student (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL ,
    course INT NOT NULL,
    primary key (id));

