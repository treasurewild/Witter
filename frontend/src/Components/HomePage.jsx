import React from 'react'
import User from './User';
import AllWits from './AllWits';

const HomePage = ({ wits }) => {
    return (
        <div className='main row container-lg'>
            <div className='col-4 offset-2'>
                <User />
            </div>
            <div className='col'>
                <AllWits wits={wits} />
            </div>
        </div>
    )
}

export default HomePage;