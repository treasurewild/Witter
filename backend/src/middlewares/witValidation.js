import { check } from 'express-validator';

export const witValidation = [
    check('text').exists(),
    check('dateCreated').exists().isISO8601(),      // This is the ISO standard for an ISO date!
    check('postedBy').exists().isMongoId()
];