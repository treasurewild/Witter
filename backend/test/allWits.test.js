import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../server.js';
import testData from './testData/sampleWits.js';
import { testUsers } from './testData/sampleUsers.js';
import User from '../src/models/user.model.js';
import Wit from '../src/models/wit.model.js';
const testDataArray = testData.wits;

chai.use(chaiHttp);

describe(`All Wits routes tests`, () => {

    beforeEach(async () => {

        try {
            await Wit.deleteMany();
            await User.deleteMany();
            console.log(`Wits cleared from the database`);
        }
        catch (error) {
            console.log(`Error clearing wits collection`);
            throw new Error(`Clearing database error`);
        }

        try {
            await Wit.insertMany(testDataArray);
            await User.insertMany(testUsers);
            console.log(`Test data inserted into Wits collection`);
        } catch (error) {
            console.log(`Error inserting into Wits collection`);
            throw new Error(`Insert into database error`);
        }

    });

    const testServer = chai.request(server).keepOpen();

    it(`should return all of the wits as an array`, async () => {
        const res = await testServer
            .get(`/`)
            .send();

        expect(res).to.have.status(200);
        expect(res.body).to.be.an(`array`);
        expect(res.body.length).to.equal(testDataArray.length);
    });

    it(`should return the correct author of a wit`, async () => {

        const res = await testServer
            .get(`/`)
            .send();

        const sampleWit = res.body[0];

        expect(sampleWit.postedBy.name).to.be.eql(`Sample User 1`);
        expect(sampleWit.postedBy.handle).to.be.eql(`sampleuser1`);

    });


})