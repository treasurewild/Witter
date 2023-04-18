import express from "express";
import User from '../models/user.model.js';
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post('/',
    body('email').isEmail().normalizeEmail(),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        User.findOne({ email: req.body.email })
            .then((user) => {
                bcrypt.compare(req.body.password, user.password)
                    .then((passwordCheck) => {
                        if (!passwordCheck) {
                            return res.status(400).send({
                                message: 'Incorrect password',
                                error
                            });
                        }
                        const token = jwt.sign({
                            userId: user._id,
                            userEmail: user.email
                        },
                            "RANDOM_TOKEN",
                            { expiresIn: "24h" }
                        );

                        res.status(200).json({
                            message: `Login successful`,
                            user: { name: user.name, handle: user.handle, _id: user._id },
                            accessToken: token,
                        })
                    })
                    .catch((error) => {
                        res.status(400).send({
                            message: `Incorrect password`,
                            error
                        })
                    })
            })
            .catch((error) => {
                res.status(404).send({
                    message: `User not found`,
                    error
                })
            })

    });


export { router as login };