import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.middleware.js";
import {
  commentPost,
  createPost,
  getAllPosts,
  likedPost,
} from "../controller/post.controller.js";

const router = express.Router();

router.post("/", authMiddleware, upload.single("image"), createPost);
router.get("/", getAllPosts);
(router.put("/:id/like", authMiddleware, likedPost),
  router.post("/:id/comment", authMiddleware, commentPost));

export default router;
