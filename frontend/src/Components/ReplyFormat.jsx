import React from 'react'

const ReplyFormat = ({ reply }) => {
    const { text, dateCreated, postedBy } = reply;
    const date = new Date(dateCreated).toUTCString();

    return (
        <div className='reply shadow rounded'>
            <h5 className='user-name'>{postedBy.name} <span className='info'>@{postedBy.handle}</span></h5>
            <p className='text offset-1 col-10'>{text}</p>
            <p className='info d-flex justify-content-end'>{date}</p>
        </div>
    )
}

export default ReplyFormat