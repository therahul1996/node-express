import {Request, Response} from 'express'
import { User } from '../models/User'

export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser = new User(req.body);
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    }
    catch(err) {
        console.log(err, 'getting err')
        res.status(400).json({message: (err as Error).message})
    }
}
export const GetAllUser = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err) {
        res.status(500).json({message: (err as Error).message})
    }
}
export const UpdateUser = async (req: Request, res: Response) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updateUser);
    }
    catch(err) {
        res.status(400).json({message: (err as Error).message})
    }
}


export const DeleteUser = async (req: Request, res: Response) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(201).json({message: "User Deleted Successfully!"});
    }
    catch(err) {
        res.status(500).json({message: (err as Error).message})
    }
}