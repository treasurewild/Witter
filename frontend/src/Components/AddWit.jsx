import React from 'react';
import { useState } from 'react';
import { postWit } from './async/witAPIcalls';
import createId from './utils/createId';

const AddWit = () => {

    const [wit, setWit] = useState("");

    const currentUser = JSON.parse(localStorage.getItem('user'));

    const addWit = async (e) => {
        e.preventDefault();
        const currentDate = new Date();
        const newWit = { _id: createId(), text: wit, dateCreated: currentDate, postedBy: currentUser }
        const res = await postWit(newWit);

        if (res.status === 200) {
            alert(res.message);
            setWit({ text: `` }); // Resets the inputs
            return;
        }

        alert(res.error.message);
    }

    return (
        <div className='m-2'>
            <form onSubmit={addWit}>
                <input className="form-control input-lg" id="add-wit" value={wit.text} type="text" onChange={(e) => setWit(e.target.value)} placeholder="Share your wit..." autoComplete="off" required />
                <button type="submit" className='btn btn-success m-2'>
                    Post
                </button>
            </form>
        </div>
    )
}

export default AddWit;