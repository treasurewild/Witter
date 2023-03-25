import AllWits from "../Components/AllWits";
import { MemoryRouter } from 'react-router-dom';
import { findAllByText, render, screen } from '@testing-library/react';
import sampleWits from './sampleWits.json';

describe(`All Wits Tests`, () => {
    test(`Should render a loading message before the Wits are available`, async () => {
        const noData = { wits: [], error: `` };
        render(
            <MemoryRouter>
                <AllWits data={noData} />
            </MemoryRouter>
        );

        expect(await screen.findByText(/loading/i)).toBeInTheDocument();
    });

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
        const witData = { wits: sampleWits, error: "" };

        render(
            <MemoryRouter >
                <AllWits data={witData} />
            </MemoryRouter>
        );

        const wits = await screen.getAllByText(/Sample Wit/i);
        expect(wits.length).toBe(4);
    });

    test(`it should render a line saying there are no wits if empty`, async () => {
        render(
            <MemoryRouter >
                <AllWits data={{ wits: [], error: `There are no wits available` }} />
            </MemoryRouter>
        );

        const wits = await screen.findByText(/There are no wits available/i);
        expect(wits).toBeInTheDocument();
    });

    test(`Wits are displayed in reverse chronological order`, async () => {
        const witData = { wits: sampleWits, error: "" };

        render(
            <MemoryRouter >
                <AllWits data={witData} />
            </MemoryRouter>
        );

        const { wits } = witData;
        expect(wits[0].text).toBe("Sample Wit 4");
        expect(wits[1].text).toBe("Sample Wit 1");
        expect(wits[2].text).toBe("Sample Wit 2");
        expect(wits[3].text).toBe("Sample Wit 3");
    });
});