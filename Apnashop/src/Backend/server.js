import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { db } from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Backend API is running...");
});

// Database test route
app.get("/test-db", async (req, res) => {
    try {
        const [row] = await db.query("SELECT 1+1 AS result");
        res.json({ message: "DB Connected", result: row });
    } catch (error) {
        res.status(500).json({ error: "DB Connection Failed", details: error });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
