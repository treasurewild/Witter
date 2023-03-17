import App from '../App.js';
import { MemoryRouter } from 'react-router-dom';
import * as api from '../Components/async/witAPIcalls.js';
import { render, screen } from '@testing-library/react';
import sampleWits from '../test/sampleWits.json';

jest.mock('../Components/async/witAPIcalls');

describe(`App Component Tests`, () => {

    // afterEach(() => jest.resetAllMocks());

    const expectedReturn = ({ wits: [], status: 204, error: { type: "get", message: `Test Get error` } });

    test('should render "Data is loading" on initial render', async () => {
        api.getWits.mockImplementation(() => { });
        render(
            <MemoryRouter>
                <App />
            </ MemoryRouter >
        );
        expect(await screen.findByText(/data is loading/i)).toBeInTheDocument();

    });

    test('should render "No Wits" message if empty array returned from server', async () => {
        api.getWits.mockImplementation(() => expectedReturn);
        render(<MemoryRouter><App /></MemoryRouter>);
        const getErrorRender = await screen.findAllByText(`There was a problem getting the wits: ${expectedReturn.error.message}`);
        expect(getErrorRender.length).toBeGreaterThan(0);
    });
})