import AllWits from "../Components/AllWits";
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
//import sampleWits from '../sampleWits.json';

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
});