import React, { useState } from 'react'

const Reply = ({ witId, addReply }) => {

    const [showReply, setShowReply] = useState(false);
    const [reply, setReply] = useState("");

    return (

        <div className='m-2'>
            {showReply ?
                <form onSubmit={() => { addReply(reply, witId); setShowReply(false); }}>
                    <input className="form-control input-lg" id="reply" value={reply.text} type='text' onChange={(e) => setReply(e.target.value)} placeholder="Reply..." autoComplete="off" required />
                    <button type="button" onClick={() => setShowReply(false)} className='btn btn-secondary m-2'>
                        Cancel
                    </button>
                    <button type="submit" className='btn btn-success m-2'>
                        Post Reply
                    </button>
                </form>
                :
                <button className='btn btn-sm btn-warning' onClick={() => setShowReply(true)}>Reply</button>
            }
        </div>
    )
}

export default Reply