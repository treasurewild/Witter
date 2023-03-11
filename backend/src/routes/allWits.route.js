import express from 'express';
import { allWits } from '../controllers/allWits.controller.js'

//Controller and validation to add

const router = express.Router();

router.route(`/`)
    .get(allWits);

export { router as allWits };