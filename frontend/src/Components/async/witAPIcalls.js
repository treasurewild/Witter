import axios from 'axios';

export const getWits = async () => {
    try {
        const res = await axios.get(process.env.REACT_APP_WITS_URL);
        if (Array.isArray(res.data) && res.data?.length > 0) return { wits: res.data, status: res.status };
        throw new Error(`No wit to retrieve`);
    } catch (e) {
        return {
            wits: [],
            status: e.response?.status ?? 204
        }
    }
}