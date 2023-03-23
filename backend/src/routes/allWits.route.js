import express from 'express';
import Wit from '../models/wit.model.js';

//Controller and validation to add

const router = express.Router();

router.route(`/`)
    .get(async (req, res) => {
        try {
            const allWits = await Wit.find({})
                .populate('postedBy', ['name', 'handle']);
            if (allWits.length === 0) throw new Error(`Wits not found`);
            res.json(allWits);
        } catch (error) {
            console.log(allWits.length)
            res.status(400);
            throw error;
        }
    });

export { router as allWits };