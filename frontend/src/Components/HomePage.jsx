import React from 'react'
import User from './User';
import AllWits from './AllWits';

const HomePage = ({ data }) => {
    return (
        <div className='main row container-lg'>
            <div className='col-4 offset-2'>
                <User />
            </div>
            <div className='col'>
                <AllWits data={data} />
            </div>
        </div>
    )
}

export default HomePage;