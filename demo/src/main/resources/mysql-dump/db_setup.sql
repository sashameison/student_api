create database if not exists student;
use student;

create table if not exists student
(
    id       BIGINT      NOT NULL AUTO_INCREMENT,
    name     VARCHAR(45) NOT NULL,
    age      INT         NOT NULL,
    course   INT         NOT NULL,
    primary key (id)
);

create table if not exists orders
(
    id      bigint      not null auto_increment,
    name    varchar(45) null,
    price   decimal     null,
    user_id bigint      not null,
    primary key (id),
    FOREIGN KEY (user_id)
        REFERENCES student (id)
);

create table if not exists book
(
    id   bigint not null auto_increment,
    name varchar(45),
    primary key (id)
);

create table if not exists order_items
(
    id       bigint not null auto_increment,
    book_id  bigint,
    order_id bigint,

    primary key (id),
    foreign key (book_id)
        references book (id),
    foreign key (order_id)
        references orders (id)
);


