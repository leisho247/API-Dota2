import { Router } from "express";
import {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getUserHeroes,
} from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/", authMiddleware, createUser);
router.get("/", authMiddleware, getAllUsers);
router.get("/:id", authMiddleware, getUser);
router.put("/:id", authMiddleware, updateUser);
router.delete("/:id", authMiddleware, deleteUser);
router.get("/:id/heroes", authMiddleware, getUserHeroes);

export default router;
