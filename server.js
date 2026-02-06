import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js"
import cookieParser from "cookie-parser";
dotenv.config();
const app =express();

app.use(cookieParser())
app.use(cors({
  origin: ["http://localhost:5173","https://mini-social-post-application.netlify.app"], // frontend URL 
  credentials: true
}));
app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/posts",postRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})
connectDB();