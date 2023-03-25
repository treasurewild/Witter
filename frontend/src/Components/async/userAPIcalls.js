import axios from "axios";

export const postUser = async (user) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_WITS_URL}register`, user);
        alert(res.data.message);
    }
    catch {
        alert('There was a problem sending the data to the server')
    }
}