import server from "../server.js";
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { testUsers } from "./testData/sampleUsers.js";
import User from "../src/models/user.model.js";

chai.use(chaiHttp);

describe(`Login tests`, () => {

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

    it(`Accepts correct password`, async () => {
        let testLogin = {
            email: "sampleuser1@gmail.com",
            password: "polly"
        };

        const res = await testServer
            .post(`/login`)
            .send(testLogin)

        const parsedText = JSON.parse(res.text);

        expect(res).to.have.status(200);
        expect(parsedText.message).to.be.eql("Login successful");
    })

    it(`Rejects incorrect password`, async () => {
        let testLogin = {
            email: "sampleuser1@gmail.com",
            password: "wrongpassword"
        };

        const res = await testServer
            .post(`/login`)
            .send(testLogin)

        const parsedText = JSON.parse(res.text);

        expect(res).to.have.status(400);
        expect(parsedText.message).to.be.eql("Incorrect password");
    })

    it(`Rejects login for user that doesn't exist`, async () => {
        let testLogin = {
            email: "imaginaryuser@gmail.com",
            password: "password"
        };

        const res = await testServer
            .post(`/login`)
            .send(testLogin)

        const parsedText = JSON.parse(res.text);

        expect(res).to.have.status(404);
        expect(parsedText.message).to.be.eql("User not found");
    })
})