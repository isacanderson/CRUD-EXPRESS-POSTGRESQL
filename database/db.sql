CREATE DATABASE libreria;

USE libreria;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
    nombres VARCHAR(200) NOT NULL,
    usuario VARCHAR(200) UNIQUE NOT NULL,
    correo VARCHAR(200) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);