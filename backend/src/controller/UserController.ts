import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";

export class UserController {
    async create(req: Request, res: Response) {
        const {name, email, password} = req.body

        if(!name) {
            return res.status(400).json({ message: "O nome é obrigatório" });

        }
        if(!email){
            return res.status(400).json({ message: "O email é obrigatório" });

        }
        if(!password) {
            return res.status(400).json({ message: "A senha é obrigatória." });
        }
        try {
            const newUser = userRepository.create({ email, name, password})
            await userRepository.save(newUser)
            return res.status(201).json(newUser);
        } catch(error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async list(req: Request, res: Response) {
        try {
            const users = await userRepository.find({
                relations: {
                    projects: true
                }
            })
            return res.status(200).json(users);
        } catch(error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        } 
    }
}