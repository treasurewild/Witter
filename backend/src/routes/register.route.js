import express from "express";
import User from '../models/user.model.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/', (req, res) => {
    bcrypt
        .hash(req.body.password, 10)
        .then(async (hashedPassword) => {
            const user = new User({
                name: req.body.name,
                handle: req.body.handle,
                email: req.body.email,
                password: hashedPassword,
            });
            await user.save()
                .then((result) => { return res.status(200).send({ message: "Registration successful", result }) })
                .catch(() => { return res.status(400).send({ message: 'This user already exists' }) })
        })
        .catch((e) => {
            res.status(500).send({
                message: "Password was not hashed successfully",
                e
            });
        });
});

export { router as register };