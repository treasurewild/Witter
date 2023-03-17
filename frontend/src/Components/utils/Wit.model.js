import createId from "./createId.js";

export default class WitModel {
    constructor(text, dateCreated, user) {
        this._id = createId();
        this.text = text;
        this.dateCreated = dateCreated;
        this.postedBy = user;
    }
}