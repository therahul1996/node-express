
import { Request, Response } from "express";
// import prisma from "../lib/prisma";
const prisma = require("../lib/prisma")

export const createUser = async (req: Request, res: Response) => {
    try {
        const { firstname, lastname, email, age } = req.body;
        const user = await prisma.user.create({
            data: { firstname, lastname, email, age }
        })
        res.status(201).json(user);
    }
    catch (err) {
        res.status(400).json({ message: "User already exist or invalid Cred" })
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updateUser = await prisma.user.update({
            where: { id: id },
            data: updateData
        })
        if (!updateUser) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(201).json(updateUser);
    }
    catch (err) {
        res.status(400).json({ message: (err as Error).message })
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const getUser = await prisma.user.findUnique({
            where: { id: id },
        })
        res.status(201).json(getUser);
    }
    catch (err) {
        res.status(400).json({ message: (err as Error).message })
    }
}
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await prisma.user.delete({
            where: { id: id }
        })
        res.status(201).json({ message: "User Deleted Successfully!" });
    }
    catch (err) {
        res.status(500).json({ message: (err as Error).message })
    }
}



export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany()
        res.status(201).json(users);
    }
    catch (err) {
        res.status(500).json({ message: (err as Error).message })
    }
}