import express from 'express';
import Wit from '../models/wit.model.js';

//Controller and validation to add

const router = express.Router();

router.post('/', (req, res) => {
    const wit = new Wit(req.body);

    wit.save()
        .then(() => res.send({ message: "Posted successfully" }))
        .catch(() => res.send({ message: 'There was a problem posting your wit' }))
});


export { router as addWit };