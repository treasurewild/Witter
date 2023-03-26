import express from 'express';
import Wit from '../models/wit.model.js';

//Controller and validation to add

const router = express.Router();

router.route(`/`)
    .get(async (req, res) => {
        try {
            const allWits = await Wit.find({})
                .populate('postedBy', ['name', 'handle'])
            res.json(allWits);
        } catch (error) {
            res.status(400);
            throw error;
        }
    });

export { router as allWits };