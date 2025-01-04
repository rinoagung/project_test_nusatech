const express = require("express");
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors")

const app = express();
const PORT = 3000;

app.use(cors())

// koneksi MySQL
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "nusatech_test",
});

app.use(express.json());

const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    jwt.verify(token, "secret", (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        req.user = decoded;
        next();
    });
};

app.post("/api/register", async (req, res) => {
    try {
        const { name, username, email, password } = req.body;

        const [existingUser] = await db.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );
        if (existingUser.length > 0) {
            return res.status(400).json({ error: "Email sudah terdaftar" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.query(
            "INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)",
            [name, username, email, hashedPassword]
        );

        res.status(201).json({ message: "User berhasil registrasi" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const [users] = await db.query("SELECT * FROM users WHERE email = ?", [
            email,
        ]);
        if (users.length === 0) {
            return res.status(401).json({ error: "login gagal" });
        }

        const user = users[0];

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "login gagal" });
        }

        const token = jwt.sign({ email: user.email }, "secret");
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/api/user", verifyToken, async (req, res) => {
    try {
        const [users] = await db.query(
            "SELECT name, username, email FROM users WHERE email = ?",
            [req.user.email]
        );
        if (users.length === 0) {
            return res.status(404).json({ error: "User tidak ditemukan" });
        }

        const user = users[0];
        res.status(200).json({ name: user.name, username: user.username, email: user.email });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/", (req, res) => {
    res.send("Welcome to my User Registration and Login API with MySQL!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
