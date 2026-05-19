import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => res.send({message: 'All users'}));
userRouter.get('/:id', (req, res) => res.send({message: 'User by id'}));
userRouter.put('/:id', (req, res) => res.send({message: 'User updated'}));
userRouter.delete('/:id', (req, res) => res.send({message: 'User deleted'}));


export default userRouter;