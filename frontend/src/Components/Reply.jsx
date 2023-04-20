import React, { useState } from 'react'
import createId from './utils/createId';
import { postReply } from './async/witAPIcalls';

const Reply = ({ witId }) => {

    const [showReply, setShowReply] = useState(false);
    const [reply, setReply] = useState("");
    const currentUser = JSON.parse(localStorage.getItem('user'));

    const addReply = async (e) => {
        e.preventDefault();
        const currentDate = new Date();
        const newReply = { _id: createId(), text: reply, dateCreated: currentDate, postedBy: currentUser, original: false }
        console.log(witId)
        const res = await postReply({ reply: newReply, witId: witId });

        if (res.status === 200) {
            alert(res.message);
            setReply(''); // Resets the inputs
            setShowReply(false);
            return;
        }

        alert(res.message);
    }

    return (

        <div className='m-2'>
            {showReply ?
                <form onSubmit={addReply}>
                    <input className="form-control input-lg" id="reply" value={reply.text} type='text' onChange={(e) => setReply(e.target.value)} placeholder="Reply..." autoComplete="off" required />
                    <button type="button" onClick={() => setShowReply(false)} className='btn btn-secondary m-2'>
                        Cancel
                    </button>
                    <button type="submit" className='btn btn-success m-2'>
                        Post Reply
                    </button>
                </form>
                :
                <button className='btn btn-warning' onClick={() => setShowReply(true)}>Reply</button>
            }
        </div>
    )
}

export default Reply