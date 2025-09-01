# 💰 CryptoRiwi

![Crypto Logo](https://img.shields.io/badge/CryptoRiwi-Beta-blueviolet?style=for-the-badge&logo=bitcoin)
![Status](https://img.shields.io/badge/Status-In_Progress-yellow?style=for-the-badge)

**CryptoRiwi** is an educational web application that simulates a cryptocurrency platform.
It allows users to register, manage a dummy wallet, view the price of Bitcoin in real time, and perform simulated transactions such as buying, selling, and making trades.

> ⚡ Project developed as part of the **Integrative Project - CodeUp Riwi 2025**.  

---

## 🚀 Features

- 🔐 **User authentication** (registration and login).
- 👛 **Virtual wallet** with fictitious initial balance.
- 💸 **Transaction simulation** (purchase, sale, deposits, withdrawals).
- 📈 **Real-time Bitcoin price** using the [CoinGecko](https://docs.coingecko.com/docs/10-mins-tutorial-guide). API
- 🛒 **Exchange of fictitious products/services** within the platform.
- 📜 **Transaction history** per user.
- 🎨 **Modern interface** with Bootstrap 5.

---

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript, Bootstrap 5  
- **Backend:** Node.js + Express  
- **Database:** MySQL  
- **External API:** CoinGecko (for real-time BTC price)  
- **Version control:** Git + GitHub  
- **Methodology:** SCRUM with Azure DevOps  

---

## 📂 Project Structure

```bash
CryptoRiwi/
├── server.js          # Servidor Express con CRUD
├── package.json       # Dependencias Node
├── public/
│   ├── index.html     # Frontend principal
│   ├── css/           # Estilos
│   └── js/            # Scripts frontend
├── sql/
│   └── schema.sql     # Script de base de datos
└── README.md          # Documentación
```

##📦 Installation and Use
🔹 Prerequisites

Node.js
 v16+

MySQL
 8+

Modern browser (Chrome, Edge, Firefox)

🔹 Steps

Clone repository:

git clone https://github.com/tuusuario/CryptoRiwi.git
Cryptoriwi CD


Install dependencies:

npm install


Configure MySQL database:

Create the database by running sql/schema.sql.

Set credentials in server.js.

Run server:

nodemon server.js


Open in browser:

http://localhost:3000

📖 Technical Documentation

📌 General objective: Develop an educational web application that allows users to simulate the use of cryptocurrencies.

📌 Scope: Registration, authentication, virtual wallet, fictitious transactions and price display.

📌 User stories:

As a user, I want to register to have my own wallet.

As a user, I want to see the price of BTC in real time.

As a user, I want to buy and sell fictitious Bitcoin.

As a user, I want to see my transaction history.


```

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

```


👨‍ 💻 Authors

Project created by CryptoRiwi Team ✨

Santiago Ochoa Posso (DevOps - Hopper Clan)

Braian Cardona Bermudez (Developer - Hopper Clan)

Maria Jose Agudelo Ocampo (Scrum Manager, Product Owner - Linus Clan)

Jose Manuel Gustamante (Developer - Hopper Clan)

Daniel Alexander Ariza (Developer - Linus Clan)
