import AllWits from "../Components/AllWits";
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import sampleWits from './sampleWits.json';

describe(`All Wits Tests`, () => {
    test(`Should render a loading message before the Wits are available`, async () => {
        const noData = { wits: [], error: "" };
        render(
            <MemoryRouter>
                <AllWits data={noData} />
            </MemoryRouter>
        );

        expect(await screen.findByText(/loading/i)).toBeInTheDocument();
    })

    test(`Should render an error message if no wits are available`, async () => {
        const errorData = { wits: [], error: `Error` };
        render
            (
                <MemoryRouter >
                    <AllWits data={errorData} />
                </MemoryRouter>
            );

        expect(await screen.findByText(/error/i)).toBeInTheDocument();
    })

    test(`Should render the correct number of Wit components based on data supplied`, async () => {
        const witData = { wits: sampleWits.wits, error: `` };
        render(
            <MemoryRouter >
                <AllWits data={witData} />
            </MemoryRouter>
        );

        const wits = await screen.getAllByText(/Sample Wit/i);
        expect(wits.length).toBe(4);
    });
});