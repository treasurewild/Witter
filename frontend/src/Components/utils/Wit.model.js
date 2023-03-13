import createId from "./createId";

export default class WitModel {
    constructor(text, dateCreated) {
        this._id = createId();
        this.text = text;
        this.dateCreated = dateCreated;
        // this.user = user - match this from request.user?
    }
}