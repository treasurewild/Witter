import express from "express";
import User from '../models/user.model.js';

const router = express.Router();

router.route('/')
    .post(async (req, res) => {

        const { email, password } = req.body;

        const user = await User.findOne({ email: email });

        if (user.password === password)
            res.send({ message: `Login successful` });
        else res.send({ message: `Try again` });

    });

export { router as login };