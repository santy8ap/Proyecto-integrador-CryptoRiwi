CREATE DATABASE CryptoRiwi;
USE CryptoRiwi;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    role ENUM('admin', 'user') DEFAULT 'user'
);

CREATE TABLE wallet (
    wallet_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    balance DECIMAL(18, 8) NOT NULL DEFAULT 0.00,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
-- create trigger to auto create wallet after user registration
DELIMITER $$

CREATE TRIGGER create_wallet_after_user
AFTER INSERT ON users
FOR EACH ROW
BEGIN
    INSERT INTO wallet (user_id, balance)
    VALUES (NEW.user_id, 150.00);
END$$

DELIMITER ;


