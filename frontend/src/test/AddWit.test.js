import AddWit from "../Components/AddWit";
import { render, screen } from '@testing-library/react';

describe(`Add Wit component tests`, () => {

    test(`Should not allow you to post if you are not logged in`, () => {
        render(
                <AddWit />
        )

        expect(screen.getByText(/You must be logged in to post/i)).toBeInTheDocument();
    })

    test(`Add Wit render tests`, () => {
        const testUser = { name: "Test User", handle: "testhandle" };
        localStorage.setItem(`user`, JSON.stringify(testUser));
        const noUserData = () => { };

        render(
                <AddWit user={testUser} setUser={noUserData} />
        )

        expect(screen.getByPlaceholderText(/Share your wit/i)).toBeInTheDocument();
    })
})
