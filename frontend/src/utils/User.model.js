import createId from "./createId.js";

export default class UserModel {
    constructor(name, handle, email, password) {
        this._id = createId();
        this.name = name;
        this.handle = handle;
        this.email = email;
        this.password = password;
    }
}