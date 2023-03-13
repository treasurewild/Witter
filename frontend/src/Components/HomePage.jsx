import React from 'react'
import User from './User';
import AllWits from './AllWits';

const HomePage = ({ wits }) => {
    return (
        <div className='main container-fluid row'>
            <div className='col-3 offset-1'>
                <User />
            </div>
            <div className='col-6'>
                <AllWits wits={wits} />
            </div>
        </div>
    )
}

export default HomePage;