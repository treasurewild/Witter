import Login from "../Components/Login";
import { render, screen } from '@testing-library/react';

describe(`Login component tests`, () => {

    test(`Should display email and password fields`, () => {

        render(
            <Login />
        )

        expect(screen.getByPlaceholderText('Email address')).toBeTruthy();
        expect(screen.getByPlaceholderText('Password')).toBeTruthy();

    })

})