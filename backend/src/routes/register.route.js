import express from "express";
import User from '../models/user.model.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/', (req, res) => {
    //const user = new User(req.body);

    bcrypt
        .hash(req.body.password, 10)
        .then((hashedPassword) => {
            const user = new User({
                name: req.body.name,
                handle: req.body.handle,
                email: req.body.email,
                password: hashedPassword,
            });
            user.save()
                .then((result) => res.send({ message: "Registration successful", result }))
                .catch(() => res.send({ message: 'This user already exists' }))
        })
        .catch((e) => {
            res.status(500).send({
                message: "Password was not hashed successfully",
                e
            });
        });
});

export { router as register };