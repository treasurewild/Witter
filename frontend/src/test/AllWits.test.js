import AllWits from "../Components/AllWits";
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import sampleWits from './sampleWits.json';
import { useState, useEffect } from "react";

describe(`All Wits Tests`, () => {
    test(`Should render a loading message before the Wits are available`, async () => {
        const noData = { wits: [], error: `` };
        render(
            <MemoryRouter>
                <AllWits wits={noData} />
            </MemoryRouter>
        );

        expect(await screen.findByText(/loading/i)).toBeInTheDocument();
    });

    test(`Should render an error message if no wits are available`, async () => {
        const errorData = { wits: [], error: `Error` };
        render
            (
                <MemoryRouter >
                    <AllWits wits={errorData} />
                </MemoryRouter>
            );

        expect(await screen.findByText(/error/i)).toBeInTheDocument();
    })

    test(`Should render the correct number of Wit components based on data supplied`, async () => {
        const witData = { wits: sampleWits, error: `` };
        render(
            <MemoryRouter >
                <AllWits wits={witData} />
            </MemoryRouter>
        );

        const wits = await screen.getAllByText(/Sample Wit/i);
        expect(wits.length).toBe(4);
    });
});