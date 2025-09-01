# 💰 CryptoRiwi

![Crypto Logo](https://img.shields.io/badge/CryptoRiwi-Beta-blueviolet?style=for-the-badge&logo=bitcoin)
![Status](https://img.shields.io/badge/Status-In_Progress-yellow?style=for-the-badge)

**CryptoRiwi** es una aplicación web educativa que simula una **plataforma de criptomonedas**.  
Permite a los usuarios **registrarse, administrar una billetera ficticia, ver el precio del Bitcoin en tiempo real y realizar transacciones simuladas** como comprar, vender y hacer intercambios.  

> ⚡ Proyecto desarrollado como parte del **Proyecto Integrador - CodeUp Riwi 2025**.  

---

## 🚀 Características

- 🔐 **Autenticación de usuarios** (registro e inicio de sesión).
- 👛 **Billetera virtual** con saldo inicial ficticio.
- 💸 **Simulación de transacciones** (compra, venta, depósitos, retiros).
- 📈 **Precio de Bitcoin en tiempo real** usando la API de [CoinGecko](https://docs.coingecko.com/docs/10-mins-tutorial-guide).
- 🛒 **Intercambio de productos/servicios** ficticios dentro de la plataforma.
- 📜 **Historial de transacciones** por usuario.
- 🎨 **Interfaz moderna** con Bootstrap 5.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript, Bootstrap 5  
- **Backend:** Node.js + Express  
- **Base de datos:** MySQL  
- **API Externa:** CoinGecko (para precio del BTC en tiempo real)  
- **Control de versiones:** Git + GitHub  
- **Metodología:** SCRUM con Azure DevOps  

---

## 📂 Estructura del Proyecto

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

##📦 Instalación y Uso
🔹 Prerrequisitos

Node.js
 v16+

MySQL
 8+

Navegador moderno (Chrome, Edge, Firefox)

🔹 Pasos

Clonar repositorio:

git clone https://github.com/tuusuario/CryptoRiwi.git
cd CryptoRiwi


Instalar dependencias:

npm install


Configurar base de datos MySQL:

Crear la base de datos ejecutando sql/schema.sql.

Ajustar credenciales en server.js.

Ejecutar servidor:

nodemon server.js


Abrir en navegador:

http://localhost:3000

📖 Documentación Técnica

📌 Objetivo general: Desarrollar una aplicación web educativa que permita a los usuarios simular el uso de criptomonedas.

📌 Alcance: Registro, autenticación, billetera virtual, transacciones ficticias y visualización de precios.

📌 Historias de usuario:

Como usuario, quiero registrarme para tener mi propia billetera.

Como usuario, quiero ver el precio de BTC en tiempo real.

Como usuario, quiero comprar y vender Bitcoin ficticio.

Como usuario, quiero ver mi historial de transacciones.


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


👨‍💻 Autores

Proyecto creado por Equipo CryptoRiwi ✨

Santiago Ochoa Posso (DevOps - Clan Hooper)

Braian Cardona Bermudez (Developer - Clan Hooper)

Maria Jose Agudelo Ocampo (Scrum Manager, Product Owner - Clan Linus)

Jose Manuel Gustamante (Developer - Clan Hooper)

Daniel Alexander Ariza (Developer - Clan Linus)
