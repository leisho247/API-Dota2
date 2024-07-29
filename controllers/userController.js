import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

const createUser = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, name, password: hashedPassword },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }finally{
    await prisma.$disconnect();
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id, 10) },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }finally{
    await prisma.$disconnect();
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, name, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.update({
      where: { id: parseInt(id, 10) },
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }finally{
    await prisma.$disconnect();
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({ where: { id: parseInt(id, 10) } });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }finally{
    await prisma.$disconnect();
  }
};

const getUserHeroes = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id, 10) },
      include: { heroes: true },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user.heroes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }finally{
    await prisma.$disconnect();
  }
};

export {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getUserHeroes,
};
