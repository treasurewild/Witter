import React from 'react';
import { useState } from 'react';
import User from './User';
import WitModel from './utils/Wit.model.js';
import axios from 'axios';

const Reply = () => {

    const [reply, setReply] = useState({});

    const userId = () => {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        console.dir(currentUser)
        return currentUser._id;
    }

    const handleChange = e => {
        const { value } = e.target;
        setReply({
            ...reply,
            text: value,
        });
    }

    const addWit = (e) => {
        e.preventDefault();
        const newWit = new WitModel(wit.text, new Date(), userId());
        console.dir(newWit);
        addWitReq(newWit);
    }

    const addWitReq = async wit => {
        //e.preventDefault();
        //const { text, dateCreated, user } = wit;
        //if (wit.text) {
        const res = await axios.post(`${process.env.REACT_APP_WITS_URL}addWit`, wit);
        alert(res.data.message);
        setWit({ text: `` }); // Resets the inputs
        return;
        //}

    }

    return (
        <div className='col-6 container-fluid row'>
            <form onSubmit={reply}>
                <div className="form-group">
                    <label >Reply:</label>
                    {/* // Could add "Reply to ${user}" */}
                    <input className="form-control input-lg" id="add-reply" value={reply.text} type="text" onChange={handleChange} autoComplete="off" required />
                </div>
                <button type="submit" className='btn btn-failure m-2'>
                    Post reply
                </button>
            </form>
        </div>
    )
}

export default AddWit