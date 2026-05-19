import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({message: 'All subscriptions'}));

subscriptionRouter.get('/:id', (req, res) => res.send({message: 'Subscription by id'}));

subscriptionRouter.post('/', (req, res) => res.send({message: 'Subscription created'}));

subscriptionRouter.put('/:id', (req, res) => res.send({message: 'Subscription updated'}));

subscriptionRouter.delete('/:id', (req, res) => res.send({message: 'Subscription deleted'}));

subscriptionRouter.get('/user/:id', (req, res) => res.send({message: 'Subscriptions by user id'}));

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({message: 'Subscription cancelled'}));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({message: 'Upcoming renewals'}));


export default subscriptionRouter;