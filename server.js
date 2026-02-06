import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";


dotenv.config();
const app = express();


app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://min-social-post-application.netlify.app",
    ],
    credentials: false,
  }),
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
