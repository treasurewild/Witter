import React from 'react';
import PropTypes from 'prop-types';
import Reply from '../Replies/Reply.jsx';
import Replies from '../Replies/Replies.jsx';

const Wit = ({ wit, user, addReply, handleDelete }) => {
    const { text, dateCreated, postedBy } = wit;
    const date = new Date(dateCreated).toUTCString();

    return (
        <div className='wit shadow rounded'>
            <h5 className='user-name'>{postedBy.name} <span className='info'>@{postedBy.handle}</span></h5>
            <p className='text offset-1 col-10'>{text}</p>
            <p className='info d-flex justify-content-end'>{date}</p>
            {localStorage.getItem('user') && user.handle !== postedBy.handle && <Reply witId={wit._id} addReply={addReply} />}
            {user.handle === postedBy.handle && <button className='btn btn-sm btn-danger' onClick={() => handleDelete(wit._id)}>Delete</button>}
            <Replies replies={wit.replies} user={user} handleDelete={handleDelete} />
        </div>
    )
}

Wit.propTypes = {
    wit: PropTypes.object
}

export default Wit;