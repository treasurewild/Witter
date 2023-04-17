import App from '../App.js';
import * as api from '../Components/async/witAPIcalls.js';
import { render, screen } from '@testing-library/react';

jest.mock('../Components/async/witAPIcalls');

describe(`App Component Tests`, () => {

    // afterEach(() => jest.resetAllMocks());

    const expectedReturn = ({ wits: [], status: 204, error: { type: "get", message: `Test Get error` } });

    test('should render "Data is loading" on initial render', async () => {
        api.getWits.mockImplementation(() => { });
        render(
            <App />
        );
        expect(await screen.findByText(/data is loading/i)).toBeInTheDocument();

    });

    test('should render "No Wits" message if empty array returned from server', async () => {
        api.getWits.mockImplementation(() => expectedReturn);
        render(<App />);
        const getErrorRender = await screen.findAllByText(`There was a problem getting the wits: ${expectedReturn.error.message}`);
        expect(getErrorRender.length).toBeGreaterThan(0);
    });
})