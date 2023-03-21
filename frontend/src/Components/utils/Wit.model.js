import createId from "./createId.js";

export default class WitModel {
    constructor(text, dateCreated, postedBy) {
        this._id = createId();
        this.text = text;
        this.dateCreated = dateCreated;
        this.postedBy = postedBy;
    }
}