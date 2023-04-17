import React from 'react';
import { useEffect, useState } from 'react';
import AddWit from './AddWit';
import Login from './Login';
import Register from './Register';

const User = () => {

    const [user, setUser] = useState({});

    const [register, setRegister] = useState(true);

    const logOut = () => {
        setUser({});
        localStorage.clear();
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser)
            setUser(JSON.parse(loggedInUser));
    }, []);

    return (
        <div className='user shadow text-center rounded col-lg'>
            {localStorage.getItem('user') ?
                <>
                    <button type="submit" className='m-1 btn btn-secondary' value="Logout" onClick={logOut}>Log Out</button>
                    <h5>You are posting as:</h5>
                    <div className='rounded user-box m-1'>
                        <h5>{user.name}</h5>
                        <h5>@{user.handle}</h5>
                    </div>
                    <AddWit />
                </>
                :
                <>
                    {register ?
                        <Login setCurrentUser={setUser} setRegister={setRegister} />
                        :
                        <Register setRegister={setRegister} />}
                </>
            }
        </div>
    )
}

export default User;