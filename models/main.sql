DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    phone_number VARCHAR(20) PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    account_balance INTEGER,
    otp VARCHAR(4),
    otp_expiration TIMESTAMP,
    verified boolean DEFAULT false
);

CREATE TABLE transactions (
    transaction_id SERIAL PRIMARY KEY,
    sender_phone_number VARCHAR(20) REFERENCES users(phone_number),
    receiver_phone_number VARCHAR(20) REFERENCES users(phone_number),
    amount INTEGER,
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
