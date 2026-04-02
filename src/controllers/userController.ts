
import { Request, Response } from "express";
// import prisma from "../lib/prisma";
const prisma = require("../lib/prisma")
export const createUser = async (req: Request, res: Response) => {
    try {
        const {name, email, age} = req.body;
        const user = await prisma.user.create({
            data: {name, email, age}
        })
        res.status(201).json(user);
    }
    catch(err) {
        res.status(400).json({message: "User already exist or invalid Cred"})
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany()
        res.status(201).json(users);
    }
    catch(err) {
        res.status(500).json({message: (err as Error).message})
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {name, email, age} = req.body;
        const updateUser = await prisma.user.update({
            where: {id: Number(id)},
            data: {name, email, age}
        })
        res.status(201).json(updateUser);
    }
    catch(err) {
        res.status(400).json({message: (err as Error).message})
    }
}
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        await prisma.user.delete({
            where: {id: Number(id)}
        })
        res.status(201).json({message: "User Deleted Successfully!"});
    }
    catch(err) {
        res.status(500).json({message: (err as Error).message})
    }
}