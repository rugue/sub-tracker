import { Router } from "express";

const authRouter = Router();

authRouter.post('/signup', (req, res) => res.json({message: 'User signed up'}));
authRouter.post('/login', (req, res) => res.json({message: 'User logged in'}));
authRouter.post('/logout', (req, res) => res.json({message: 'User logged out'}));


export default authRouter;