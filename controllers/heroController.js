import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createHero = async (req, res) => {
  const { name, role, abilities, userId, categoryId } = req.body;
  try {
    const hero = await prisma.hero.create({
      data: { name, role, abilities, userId, categoryId },
    });
    res.json(hero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllHeroes = async (req, res) => {
  try {
    const heroes = await prisma.hero.findMany();
    res.json(heroes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getHeroById = async (req, res) => {
  const { id } = req.params;
  try {
    const hero = await prisma.hero.findUnique({
      where: { id: parseInt(id) },
    });
    if (!hero) {
      return res.status(404).json({ error: "Hero not found" });
    }
    res.json(hero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateHero = async (req, res) => {
  const { id } = req.params;
  const { name, role, abilities, userId, categoryId } = req.body;
  try {
    const hero = await prisma.hero.update({
      where: { id: parseInt(id, 10) },
      data: { name, role, abilities, userId, categoryId },
    });
    res.json(hero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteHero = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.hero.delete({
      where: { id: parseInt(id, 10) },
    });
    res.json({ message: "Hero deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createHero, getAllHeroes, getHeroById, updateHero, deleteHero };
