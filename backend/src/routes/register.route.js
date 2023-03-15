import express from "express";
import User from '../models/user.model.js';

const router = express.Router();

router.post('/', (req, res) => {
    const user = new User(req.body);

    user.save()
        .then(() => res.send({ message: "Registration successful" }))
        .catch(() => res.send({ message: 'This user already exists' }))
});

export { router as register };