import React from 'react'
import ReplyFormat from './ReplyFormat';

const Replies = ({ replies }) => {

    const populateReplies = () => {

        if (replies?.length > 0) {
            orderReplies();
            const display = replies.map(reply => {
                // Wits that have no user attached to the ID are not displayed.
                if (reply.postedBy !== null) {
                    return (<ReplyFormat reply={reply} key={reply._id} />)
                }
                return null;
            });
            return (<>
                <h5>Replies</h5>
                {display}
            </>)
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