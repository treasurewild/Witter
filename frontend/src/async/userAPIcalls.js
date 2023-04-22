import axios from "axios";

export const registerUser = async (user) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_WITS_URL}register`, user);
        console.dir(res)
        return { message: res.data.message, status: res.status, user: res.data.user }
    }
    catch (error) {
        return {
            status: error.response?.status,
            message: error.response?.data.message,
            error: {
                type: "post",
            }
        }
    }
}

export const submitLogin = async (user) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_WITS_URL}login`, user);
        return { message: res.data.message, status: res.status, user: res.data.user, accessToken: res.data.accessToken }
    }
    catch (error) {
        console.dir(error)
        return {
            status: error.response?.status,
            message: error.response?.data.message,
            error: {
                type: "post",
            }
        }
    }
}