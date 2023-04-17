import Wit from "../Components/Wit";
import { render, screen } from '@testing-library/react';
import WitModel from "../Components/utils/Wit.model";

jest.mock("../Components/utils/Wit.model", () => {

    return class WitModel {
        constructor() {
            this.text = `Sample Wit`;
            this.dateCreated = `2015-07-07T18:45:00.000Z`;
            this.postedBy = { name: "Someone", handle: "handle" };
        }
    }
});

describe(`Wit Component tests`, () => {

    test(`Wit contains text, user, handle and date`, () => {
        const testWit = new WitModel();
        const date = new Date(testWit.dateCreated).toUTCString();

        render(
            <Wit wit={testWit} />
        )

        const text = screen.getByText(testWit.text);
        const postedBy = screen.getByText(testWit.postedBy.name);
        const dateCreated = screen.getByText(date);

        expect(text.className).toBe('text offset-1 col-10');
        expect(postedBy.className).toBe('user-name col');
        expect(dateCreated.className).toBe('date col-4 offset-8');

    });
})