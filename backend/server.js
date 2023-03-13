import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';
import { register } from './src/routes/register.route.js';
import { login } from './src/routes/login.route.js';

config({ path: `.env.${process.env.NODE_ENV}` });

import { allWits } from './src/routes/allWits.route.js';

const port = process.env.PORT;
const host = process.env.HOST;
const app = express();
app.use(bodyParser.json());

const main = async () => {
    console.log(`Connecting to DB @ ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
    console.log(`Connected to DB @ ${process.env.DB_URI}`);
}

main().catch(err => console.log(err));

app.use(cors());
app.use(`/`, allWits);
app.use(`/register`, register);
app.use('/login', login)

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is listening on http://${SERVERHOST}:${SERVERPORT}`);
})

export default server;