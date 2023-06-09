import axios from 'axios';

export const getWits = async () => {
    try {
        const res = await axios.get(process.env.REACT_APP_WITS_URL);
        if (Array.isArray(res.data) && res.data?.length > 0) return { wits: res.data, status: res.status };
        return { message: 'No wit to retrieve at this time' }
    } catch (error) {
        return {
            wits: [],
            status: error.response?.status ?? 204
        }
    }
}

export const postWit = async wit => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_WITS_URL}addWit`, wit)
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

export const postReply = async data => {
    try {
        const res = await axios.put(`${process.env.REACT_APP_WITS_URL}addWit/reply`, data)
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

export const deleteWit = async id => {
    try {
        console.log(id)
        const res = await axios.delete(`${process.env.REACT_APP_WITS_URL}addWit`, { data: { id: id } });
        return { message: res.data.message, status: res.status }
    }
    catch (err) {
        return { message: 'Could not communicate with server' }
    }
}