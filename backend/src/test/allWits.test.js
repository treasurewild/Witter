import allWits from '../routes/allWits.route.js';
import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../../server.js';
import testData from './sampleWits.js';
const testDataArray = testData.wits;

chai.use(chaiHttp);

describe(`All Wits routes tests`, () => {

    const testServer = chai.request(server).keepOpen();

    it(`should return all of the wits as an array`, async () => {
        const res = await testServer
            .get(`/`)
            .send();

        expect(res).to.have.status(200);
        expect(res.body).to.be.an(`array`);
        expect(res.body.length).to.equal(testDataArray.length);
    });
})