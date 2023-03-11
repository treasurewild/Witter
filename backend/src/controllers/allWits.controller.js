import { getWitsService } from '../services/wits.service.js';

export const allWits = async (req, res) => {
    try {
        const wits = await getWitsService();
        res.json(wits)
    } catch (e) {
        res.status(404).send(`Not found`);
    }
}