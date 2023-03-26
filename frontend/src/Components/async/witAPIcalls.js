import axios from 'axios';

export const getWits = async () => {
    try {
        const res = await axios.get(process.env.REACT_APP_WITS_URL);
        if (Array.isArray(res.data) && res.data?.length > 0) return { wits: res.data, status: res.status };
        alert(`No wit to retrieve at this time`);
    } catch (e) {
        return {
            wits: [],
            status: e.response?.status ?? 204
        }
    }
}

export const postWit = async wit => {
    // await axios.post(`${process.env.REACT_APP_WITS_URL}addWit`, wit)
    //     .then(res => { alert(res.data.message) })
    //     .catch(err => { alert('There was a problem sending the data to the server') })
    try {
        const res = await axios.post(`${process.env.REACT_APP_WITS_URL}addWit`, wit)
        alert(res.data.message)
    }
    catch (error) {
        alert('There was a problem sending the data to the server')
    }
}