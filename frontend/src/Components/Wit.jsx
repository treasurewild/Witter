import React from 'react';
import WitModel from './utils/Wit.model';
import PropTypes from 'prop-types';

const Wit = ({ wit }) => {

    const { text, dateCreated } = wit;
    const date = new Date(dateCreated).toUTCString();

    return (
        <div className='wit shadow rounded'>
            <h5 className='user-name'>Username <span className='info'>@handle</span></h5>
            <p className='offset-1 col-10'>{text}</p>
            <div className='row info container-lg'>
                <div className='col-4 offset-8'>
                    <p>{date}</p>
                </div>
            </div>
        </div >
    )
}

Wit.propTypes = {
    wit: PropTypes.instanceOf(WitModel)
}

export default Wit;