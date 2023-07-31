import { Request, Response } from "express";
import { projectRepository } from "../repositories/projectRepository";
import { userRepository } from "../repositories/userRepository";

export class ProjectController {
    async create(req: Request, res: Response) {
        const {name, url } = req.body
        const { userId } = req.params
        if(!name) {
            return res.status(400).json({ message: "O nome é obrigatório." });
        }
        if(!url) {
            return res.status(400).json({ message: "A url é obrigatória." });
        }
        try {
            const user = await userRepository.findOneBy({ id: Number(userId)})  
            if(!user) {
                return res.status(404).json({ message: "O Usuario não existe"});
            }
            const newProject = projectRepository.create({name, url, sentBy: user});
            await projectRepository.save(newProject);
            return res.status(201).json(newProject)
        } catch(error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async list(req: Request, res: Response) {
        try {
            const projects = await projectRepository.find()
            return res.status(200).json(projects);
        } catch(error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        } 
    }
}