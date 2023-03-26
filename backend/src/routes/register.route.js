import express from "express";
import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post('/',
    body('name').isString(),
    body('email').isEmail().normalizeEmail(),
    body('handle').isString(),

    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

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
            .catch((error) => {
                res.status(500).send({
                    message: "Password was not hashed successfully",
                    error
                });
            });
    });

export { router as register };