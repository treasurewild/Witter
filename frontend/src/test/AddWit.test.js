import AddWit from "../Components/AddWit";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

describe(`Add Wit component tests`, () => {

    test(`Should not allow you to post if you are not logged in`, () => {
        render(
            <MemoryRouter>
                <AddWit />
            </MemoryRouter>
        )

        expect(screen.getByText(/You must be logged in to post/i)).toBeInTheDocument();
    })

    test(`Add Wit render tests`, () => {
        const testUser = { name: "Test User", handle: "testhandle" };
        localStorage.setItem(`user`, JSON.stringify(testUser));
        const noUserData = () => { };

        render(
            <MemoryRouter>
                <AddWit user={testUser} setUser={noUserData} />
            </MemoryRouter>
        )

        expect(screen.getByPlaceholderText(/Share your wit/i)).toBeInTheDocument();
    })
})