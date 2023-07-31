import { Router } from "express";
import { UserController } from "./controller/UserController";
import { ProjectController } from "./controller/ProjectController";

const routes = Router();

// User
routes.post('/user', new UserController().create);
routes.get('/user', new UserController().list);

// Project
routes.post('/project/:userId', new ProjectController().create);
routes.get('/project', new ProjectController().list);

export default routes