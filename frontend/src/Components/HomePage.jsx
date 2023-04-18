import React from 'react'
import User from './User.jsx';
import AllWits from './AllWits.jsx';
import PropTypes from 'prop-types';

const HomePage = ({ data }) => {
    return (
        <div className='main '>
            <User />
            <AllWits data={data} />
        </div>
    )
}

export default HomePage;

HomePage.propTypes = {
    data: PropTypes.array
};