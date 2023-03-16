// import App from '../App.js';
// import { MemoryRouter } from 'react-router-dom';
// import * as api from '../Components/async/witAPIcalls.js';
// import sampleWits from '../test/sampleWits.json';

// jest.mock('../Components/async/witAPIcalls');

// describe(`App Component Tests`, () => {

//     // afterEach(() => jest.resetAllMocks());

//     const expectedReturn = ({ wits: [], status: 204, error: { type: `Test Get error` } });

//     test('should render "Data is loading" on initial render', async () => {
//         api.getWits.mockImplementation(() => { });
//         render(<MemoryRouter><App /></MemoryRouter>);
//         expect(await screen.findByText(/data is loading/i)).toBeInTheDocument();

//     });

// })