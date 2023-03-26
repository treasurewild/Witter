import axiosMock from 'axios';
import * as api from '../Components/async/witAPIcalls.js';

jest.mock('axios');
window.alert = jest.fn(); // Prevents issue with jest and alerts

describe(`Wit API calls tests`, () => {

    const testWit = {}

    test('should have made a post request to axios', async () => {
        window.alert.mockClear();

        await api.postWit(testWit);
        expect(axiosMock.post).toHaveBeenCalledTimes(1);
    });

    test('should have made a get request to axios', async () => {
        window.alert.mockClear();

        await api.getWits();
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
        expect(axiosMock.get).toHaveBeenCalledWith(process.env.REACT_APP_WITS_URL);

    });
});