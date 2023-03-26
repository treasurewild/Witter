import axiosMock from 'axios';
import { registerUser } from '../Components/async/userAPIcalls.js';

jest.mock('axios');
window.alert = jest.fn(); // Prevents issue with jest and alerts

describe(`User API calls tests`, () => {

    const testUser = {}

    test('should have made a post request to axios', async () => {
        window.alert.mockClear();

        await registerUser(testUser);
        expect(axiosMock.post).toHaveBeenCalledTimes(1);
    });
});