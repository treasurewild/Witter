import Register from "../Components/Register";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

jest.mock('../Components/utils/createId', () => () => 'test_id');

describe(`Register component tests`, () => {

    const mockSubmit = jest.fn(() => { });

    beforeEach(() => {
        render(<MemoryRouter><Register /></MemoryRouter>)
    })

    test(`Should render title "create new account"`, () => {
        const title = screen.getByText(/create new account/i);
        expect(title).toBeInTheDocument();
    })

    test(`Should contain inputs for email, handle, name and password`, () => {
        expect(screen.getByPlaceholderText('Full Name')).toBeTruthy();
        expect(screen.getByPlaceholderText('@userhandle')).toBeTruthy();
        expect(screen.getByPlaceholderText('Email')).toBeTruthy();
        expect(screen.getByPlaceholderText('Password')).toBeTruthy();
    })
})