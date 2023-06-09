import React from 'react';
import { useState } from 'react';
import AddWit from '../Wits/AddWit';
import Login from './Login';
import Register from './Register';
import lightbulb from '../../images/lightbulb.svg';

const User = ({ user, setUser, addWit }) => {

    const [register, setRegister] = useState(true);

    const logOut = () => {
        setUser({});
        localStorage.clear();
    }

    return (
        <div className='user shadow text-center'>
            {localStorage.getItem('user') ?
                <>
                    <button type="submit" className='m-1 btn btn-secondary' value="Logout" onClick={logOut}>Log Out</button>
                    <h5>You are posting as:</h5>
                    <div className='rounded user-box m-1'>
                        <h5>{user.name}</h5>
                        <h5><span className='text-warning'>@</span>{user.handle}</h5>
                    </div>
                    <AddWit addWit={addWit} />
                </>
                :
                <>
                    <div className='align-middle text-center '>
                        <img className="lightbulb" src={lightbulb} alt='lightbulb logo' />
                        {register ?
                            <Login setCurrentUser={setUser} setRegister={setRegister} />
                            :
                            <Register setRegister={setRegister} />}
                    </div>
                </>
            }
        </div>
    )
}

export default User;