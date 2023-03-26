import server from "../server.js";
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe(`AddWit tests`, () => {

    const testServer = chai.request(server).keepOpen();

    it(`Should not add a Wit that does not have text`, async () => {
        let testWit = {
            dateCreated: `2013-04-22T15:00:00.000Z`,
            postedBy: `6410a779b24321871c39f388`
        }

        const res = await testServer
            .post(`/addWit`)
            .send(testWit)

        expect(res).to.have.status(422);
        expect(res).to.have.property(`error`);
        expect(res.text).to.be.eql(`Failed to add wit`);
    })

    it(`Should not add a Wit that does not have a postedBy`, async () => {
        let testWit = {
            dateCreated: `2013-04-22T15:00:00.000Z`,
            text: `test`,
        }

        const res = await testServer
            .post(`/addWit`)
            .send(testWit)

        expect(res).to.have.status(422);
        expect(res).to.have.property(`error`);
        expect(res.text).to.be.eql(`Failed to add wit`);
    })

    it(`Should not add a Wit that does not have a date`, async () => {
        let testWit = {
            text: `test`,
            postedBy: `610a779b24321871c39f388`
        }

        const res = await testServer
            .post(`/addWit`)
            .send(testWit)

        expect(res).to.have.status(422);
        expect(res).to.have.property(`error`);
        expect(res.text).to.be.eql(`Failed to add wit`);
    })

    it(`Should add a Wit that has date, user and text`, async () => {
        let testWit = {
            _id: '6434a725b65421871c39f388',
            text: `test`,
            dateCreated: `2013-04-22T15:00:00.000Z`,
            postedBy: `6410a779b24321871c39f388`
        }

        const res = await testServer
            .post(`/addWit`)
            .send(testWit)

        expect(res).to.have.status(200);
        expect(res.text).to.be.eql('{"message":"Posted successfully"}');
    })

})