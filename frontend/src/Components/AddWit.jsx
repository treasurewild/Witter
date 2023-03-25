import React from 'react';
import { useState } from 'react';
import User from './User';
import WitModel from './utils/Wit.model.js';
import { postWit } from './async/witAPIcalls';

const AddWit = ({ user, setUser }) => {

    const [wit, setWit] = useState({});

    const postedBy = JSON.parse(localStorage.getItem('user'));

    const handleChange = e => {
        const { value } = e.target;
        setWit({
            ...wit,
            text: value,
        });
    }

    const addWit = (e) => {
        e.preventDefault();
        const newWit = new WitModel(wit.text, new Date(), postedBy);
        postWit(newWit);
        setWit({ text: `` }); // Resets the inputs
    }

    return (
        <div className='main container-fluid row'>
            <div className='col-3 offset-1'>
                <User user={user} setUser={setUser} />
            </div>
            {localStorage.getItem('user') ?
                <div className='col-6'>
                    <form onSubmit={addWit}>
                        <div className="form-group">
                            <label >Share your Wit:</label>
                            <input className="form-control input-lg" id="add-wit" value={wit.text} type="text" onChange={handleChange} placeholder="Share your wit..." autoComplete="off" required />
                        </div>
                        <button type="submit" className='btn btn-success m-2'>
                            Post
                        </button>

                    </form>
                </div>
                :
                <div className='col-6'>
                    <h4>You must be logged in to post.</h4>
                </div>}
        </div>
    )
}

export default AddWit