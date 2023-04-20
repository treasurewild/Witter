import express from 'express';
import Wit from '../models/wit.model.js';

//Controller and validation to add

const router = express.Router();

router.route(`/`)
    .get(async (req, res) => {
        try {
            const allWits = await Wit.find({ original: true })
                .populate('postedBy', ['name', 'handle'])
                .populate({
                    path: 'replies',
                    populate: { path: 'postedBy' }
                });
            res.json(allWits);
        } catch (error) {
            res.status(400);
            throw error;
        }
    });

export { router as allWits };