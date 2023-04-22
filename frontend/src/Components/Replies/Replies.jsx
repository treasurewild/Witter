import React, { useState } from 'react'
import ReplyFormat from './ReplyFormat.jsx';

const Replies = ({ replies, user, handleDelete }) => {

    const [showReplies, setShowReplies] = useState(false);

    const populateReplies = () => {

        if (replies?.length > 0) {
            orderReplies();
            const display = replies.map(reply => {
                // Wits that have no user attached to the ID are not displayed.
                if (reply.postedBy !== null) {
                    return (<ReplyFormat reply={reply} key={reply._id} user={user} handleDelete={handleDelete} />)
                }
                return null;
            });
            return (
                <>
                    <button className='btn btn-sm btn-secondary m-2' onClick={() => setShowReplies(!showReplies)}>{showReplies ? 'Hide Replies' : 'Show Replies'}</button>
                    {showReplies && display}
                </>
            )
        }
        return;
    }

    const orderReplies = () => {
        replies.sort(function (a, b) {
            return new Date(b.dateCreated) - new Date(a.dateCreated);
        })

    }
    return (
        <>
            {populateReplies()}
        </>
    )
}

export default Replies