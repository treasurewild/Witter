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

export const submitLogin = async (user) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_WITS_URL}login`, user);
        console.dir(res)
        return { message: res.data.message, status: res.status, user: res.data.user }
    }
    catch (error) {
        return {
            status: error.response?.status,
            error: {
                type: "post",
                message: error.response?.message
            }
        }
    }
}