import express from "express";
import { login, logout, signup } from "../controller/auth.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router=express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.delete("/logout",logout);
router.get("/me", authMiddleware, (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    email: req.user.email,
  });
});


export default router;