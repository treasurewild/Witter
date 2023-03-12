import express from 'express';
import Wit from '../models/wit.model.js';

//Controller and validation to add

const router = express.Router();

router.route(`/`)
    .get(async (req, res) => {
        // I have no idea why thi version worked, but putting the try-catch inside a function and then calling it didn't, but hey
        try {
            const allWits = await Wit.find({});
            res.send(allWits);
        } catch (error) {
            throw error;
        }

    })

export { router as allWits };