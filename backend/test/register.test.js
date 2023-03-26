import server from "../server.js";
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import User from "../src/models/user.model.js";
import { testUsers } from "./testData/sampleUsers.js";

chai.use(chaiHttp);

describe(`Register tests`, () => {

    const testServer = chai.request(server).keepOpen();

    beforeEach(async () => {

        try {
            await User.deleteMany();
            console.log(`Users cleared from the database`);
        }
        catch (error) {
            console.log(`Error clearing users collection`);
            throw new Error(`Clearing database error`);
        }

        try {
            await User.insertMany(testUsers);
            console.log(`Test data inserted into User collection`);
        } catch (error) {
            console.log(`Error inserting into User collection`);
            throw new Error(`Insert into database error`);
        }
    });

    it(`Registers unique user`, async () => {
        const testUser = {
            name: "Test User",
            handle: "testuser",
            email: "testuser@gmail.com",
            password: "password"
        }

        const res = await testServer
            .post('/register')
            .send(testUser)

        expect(res).to.have.status(200);
        expect(res.body.message).to.be.eql(`Registration successful`);
    })

    it(`Rejects registration for existing email address`, async () => {
        const testUser = {
            name: "Test User",
            handle: "testuser",
            email: "sampleuser1@gmail.com",
            password: "password"
        }

        const res = await testServer
            .post('/register')
            .send(testUser)

        expect(res).to.have.status(400);
        expect(res.body.message).to.be.eql(`This user already exists`);
    })

    it(`Rejects registration for existing handle`, async () => {
        const testUser = {
            name: "Test User",
            handle: "sampleuser1",
            email: "testuser@gmail.com",
            password: "password"
        }

        const res = await testServer
            .post('/register')
            .send(testUser)

        expect(res).to.have.status(400);
        expect(res.body.message).to.be.eql(`This user already exists`);
    })

});