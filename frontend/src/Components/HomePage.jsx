import React from 'react'
import User from './User';
import AllWits from './AllWits';

const HomePage = ({ user, setUser, data }) => {
    return (
        <div className='main container-fluid row'>
            <div className='col-3 offset-1'>
                <User user={user} setUser={setUser} />
            </div>
            <div className='col-6'>
                <AllWits data={data} />
            </div>
        </div>
    )
}

export default HomePage;