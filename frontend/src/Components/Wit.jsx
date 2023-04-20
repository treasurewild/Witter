import React from 'react';
import PropTypes from 'prop-types';
import Reply from './Reply.jsx';
import Replies from './Replies.jsx';
import { deleteWit } from './async/witAPIcalls.js';

const Wit = ({ wit, user }) => {
    const { text, dateCreated, postedBy } = wit;
    const date = new Date(dateCreated).toUTCString();

    const handleDelete = async () => {
        const res = await deleteWit(wit._id);
        alert(res.message)
    }

    return (
        <div className='wit shadow rounded'>
            <h5 className='user-name'>{postedBy.name} <span className='info'>@{postedBy.handle}</span></h5>
            <p className='text offset-1 col-10'>{text}</p>
            <p className='info d-flex justify-content-end'>{date}</p>
            {localStorage.getItem('user') && <Reply witId={wit._id} />}
            <Replies replies={wit.replies} user={user} />
            {user.handle === postedBy.handle && <button className='btn btn-sm btn-secondary' onClick={handleDelete}>Delete</button>}
        </div>
    )
}

Wit.propTypes = {
    wit: PropTypes.object
}

export default Wit;