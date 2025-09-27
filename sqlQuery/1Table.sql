create database if not exists film_db;
use film_db;

create table if not exists film(
id int auto_increment primary key,
judul varchar(255) not null,
sutradara varchar(100) not null,
genre varchar(100),
tahun_rilis varchar(4),
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp
)