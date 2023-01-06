CREATE SCHEMA needs_portal;
USE needs_portal;

CREATE TABLE users (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(500) NOT NULL,
    password VARCHAR(500) UNIQUE NOT NULL,
    email VARCHAR(500) NOT NULL,
    biography VARCHAR(2500),
    photo VARCHAR(255) 
);

CREATE TABLE services (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    tittle VARCHAR(500) NOT NULL,
    explication VARCHAR(2500) NOT NULL,
    file VARCHAR(255),
    userId INT UNSIGNED NOT NULL,
    resolve BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE comments (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    comment VARCHAR(2500) NOT NULL,
    userId INT UNSIGNED NOT NULL,
    serviceId INT UNSIGNED NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (serviceId) REFERENCES services(id) 
);


INSERT INTO users (name, password, email) VALUES ("Pepe", "123456", "pepe@email.com");