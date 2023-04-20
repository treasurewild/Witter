import express from 'express';
import Wit from '../models/wit.model.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post('/',
    body('text').isString(),
    body('postedBy._id').isMongoId(),

    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.dir(errors)
            return res.status(400).json({ errors: errors.array() });
        }

        const wit = new Wit(req.body);
        const { dateCreated, text, postedBy } = req.body;

        if (dateCreated && text && postedBy) {
            wit.save()
                .then(() => res.status(200).send({ message: "Posted successfully" }))
                .catch(() => res.status(400).send({ message: 'There was a problem posting your wit' }))
        }
        else return res.status(422).send(`Failed to add wit`);
    });

router.put('/reply',
    body('reply.text').isString(),
    body('reply.postedBy._id').isMongoId(),

    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.dir(errors)
            return res.status(400).send({ message: 'Validation error', errors: errors.array() });
        }

        const { dateCreated, text, postedBy, _id } = req.body.reply;
        const reply = new Wit(req.body.reply);

        if (dateCreated && text && postedBy) {
            reply.save()
                .then(() => {
                    Wit.findByIdAndUpdate(req.body.witId, { $push: { replies: reply } })
                        .then(() => res.status(200).send({ message: "Posted successfully" }))
                })
                .catch(() => res.status(400).send({ message: 'There was a problem posting your wit' }))
        }
        else return res.status(422).send({ message: `Failed to add wit` });
    });

export { router as addWit };