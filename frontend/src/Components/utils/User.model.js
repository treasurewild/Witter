import createId from "./createId";

export default class UserModel {
    constructor(name, handle, email, password) {
        this._id = createiD();
        this.name = name;
        this.handle = handle;
        this.email = email;
        this.password = password;
    }
}