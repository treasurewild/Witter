import WitModel from "../Components/utils/Wit.model";

test(`Should create an instance of WitModel when constructor is called`, () => {
    const [wit] = ["Test output"];

    const testWit = new WitModel(wit);

    expect(testWit.wit).toBe(wit);
    expect(testWit).toBeInstanceOf(WitModel);
})