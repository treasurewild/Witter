import React from 'react';
import { deleteWit } from './async/witAPIcalls.js';

const ReplyFormat = ({ reply, user }) => {
    const { text, dateCreated, postedBy } = reply;
    const date = new Date(dateCreated).toUTCString();

    const handleDelete = async () => {
        const res = await deleteWit(reply._id);
        alert(res.message);
    }

    return (
        <div className='reply shadow rounded'>
            <h5 className='user-name'>{postedBy.name} <span className='info'>@{postedBy.handle}</span></h5>
            <p className='text offset-1 col-10'>{text}</p>
            <p className='info d-flex justify-content-end'>{date}</p>
            {user.handle === postedBy.handle && <button className='btn btn-sm btn-danger' onClick={handleDelete}>Delete</button>}
        </div>
    )
}

export default ReplyFormat