import express from "express";
import User from '../models/user.model.js';
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/', async (req, res) => {

    // const { email, password } = req.body;

    // const user = await User.findOne({ email: email });

    // if (user && user.password === password)
    //     res.send({
    //         message: `Login successful`,
    //         user: user,
    //     });
    // else res.send({ message: `Incorrect username/password` });

    User.findOne({ email: req.body.email })
        .then((user) => {
            bcrypt.compare(req.body.password, user.password)
                .then((passwordCheck) => {
                    if (!passwordCheck) {
                        return res.status(400).send({
                            message: `Incorrect password`,
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

                    res.status(200).send({
                        message: `Login successful`,
                        email: user.email,
                        user: user,
                        token
                    })
                })
                .catch((e) => {
                    res.status(400).send({
                        message: `Incorrect password`,
                        e
                    })
                })
        })
        .catch((e) => {
            res.status(404).send({
                message: `User not found`,
                e
            })
        })

});


export { router as login };