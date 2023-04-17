import React from 'react';
import WitModel from './utils/Wit.model.js';
import PropTypes from 'prop-types';

const Wit = ({ wit }) => {

    const { text, dateCreated, postedBy } = wit;
    const date = new Date(dateCreated).toUTCString();

    return (
        <div className='container wit shadow rounded row'>
            <h5 className='user-name col'>{postedBy.name} <span className='info'>@{postedBy.handle}</span></h5>
            <p className='text offset-1 col-10'>{text}</p>
            <div className='row info container-lg'>
                <p className='date col-4 offset-8'>{date}</p>
            </div>
        </div>
    )
}

Wit.propTypes = {
    wit: PropTypes.instanceOf(WitModel)
}

export default Wit;