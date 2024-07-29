import { Router } from "express";
import {
  createHero,
  getAllHeroes,
  getHeroById,
  updateHero,
  deleteHero,
} from "../controllers/heroController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = Router();

router.post("/", authMiddleware, createHero);
router.get("/", authMiddleware, getAllHeroes);
router.get("/:id", authMiddleware, getHeroById);
router.put("/:id", authMiddleware, updateHero);
router.delete("/:id", authMiddleware, deleteHero);

export default router;
