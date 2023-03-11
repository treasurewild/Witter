import WitModel from "../Components/utils/Wit.model";

test(`Should create an instance of WitModel when constructor is called`, () => {
    const [text] = ["Test output"];

    const testWit = new WitModel(text);

    expect(testWit.text).toBe(text);
    expect(testWit).toBeInstanceOf(WitModel);
})