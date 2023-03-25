import UserModel from "../Components/utils/User.model";

describe(`UserModel tests`, () => {

    test(`Should create an instance of UserModel when constructor is called`, () => {
        const testName = "Test User";
        const testHandle = "testhandle";
        const testEmail = "test@test.com";
        const testPassword = "test";

        const testUser = new UserModel(testName, testHandle, testEmail, testPassword);

        expect(testUser.name).toBe(testName);
        expect(testUser.handle).toBe(testHandle);
        expect(testUser.email).toBe(testEmail);
        expect(testUser.password).toBe(testPassword);
        expect(testUser).toBeInstanceOf(UserModel);

    })
})