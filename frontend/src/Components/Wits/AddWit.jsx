import React from 'react';
import { useState } from 'react';

const AddWit = ({ user, addWit }) => {

    const [wit, setWit] = useState("");

    return (
        <div className='m-2'>
            <form onSubmit={() => addWit(wit)}>
                <input className="form-control input-lg" id="add-wit" value={wit.text} type="text" onChange={(e) => setWit(e.target.value)} placeholder="Share your wit..." autoComplete="off" required />
                <button type="submit" className='btn btn-success m-2'>
                    Post
                </button>
            </form>
        </div>
    )
}

export default AddWit;