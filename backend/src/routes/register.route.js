import express from "express";
import User from '../models/user.model.js';

const router = express.Router();

router.route('/')
    .post((req, res) => {
        const user = new User(req.body);

        user.save(

            res.send({ message: "Registration successful" }));
    });

export { router as register };