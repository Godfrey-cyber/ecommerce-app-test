import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js"

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    // origin: process.env.CLIENT_URL,
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

const PORT = process.env.PORT || 5000;
app.use('/api/v1/users', userRoutes)
app.listen(PORT, () => {
  console.log(`Success 💯! Database running on port: ${PORT} 👍`);
});
