import express from "express";
import User from '../models/user.model.js';

const router = express.Router();

router.post('/', async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (user && user.password === password)
        res.send({
            message: `Login successful`,
            user: user,
        });
    else res.send({ message: `Incorrect username/password` });

});


export { router as login };