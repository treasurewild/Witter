import React from 'react';
import WitModel from './utils/Wit.model';
import PropTypes from 'prop-types';

const Wit = ({ wit }) => {

    const { text } = wit;

    return (
        <div className='wit'>
            <p>{text}</p>
        </div>
    )
}

Wit.propTypes = {
    wit: PropTypes.instanceOf(WitModel)
}

export default Wit;