import Register from "../Components/Register";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import sampleWits from './sampleWits.json';

jest.mock('../Components/utils/createId', () => () => 'test_id');

describe(`Register component tests`, () => {

    const mockSubmit = jest.fn(() => { });

    beforeEach(() => {
        // const routes = [
        //     {
        //         path: '/register',
        //         element: <Register />
        //     },
        //     {
        //         path: '/',
        //         element: <p>Redirect to HomePage</p>
        //     }
        // ]

        render(<MemoryRouter><Register /></MemoryRouter>)
    })

    test(`Should render title "create new account"`, () => {
        const title = screen.getByText(/create new account/i);
        expect(title).toBeInTheDocument();
    })
})