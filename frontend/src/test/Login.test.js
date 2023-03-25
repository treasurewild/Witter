import Login from "../Components/Login";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

describe(`Login component tests`, () => {

    test(`Should display email and password fields`, () => {

        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        )

        expect(screen.getByPlaceholderText('Email address')).toBeTruthy();
        expect(screen.getByPlaceholderText('Password')).toBeTruthy();

    })

})