import express from "express";
import { createUser, loginUser } from "../controllers/authController.js";
import { body } from "express-validator";

const router = express.Router();

router.post("/register", createUser),
  [
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    createUser,
  ];

router.post("/login", loginUser),
  [
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password").notEmpty().withMessage("Password is required"),
    loginUser,
  ];

export default router;
