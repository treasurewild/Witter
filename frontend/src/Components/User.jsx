import React from 'react';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddWit from './AddWit';
import Login from './Login';

const User = () => {

    const [user, setUser] = useState({});

    const logOut = () => {
        setUser({});
        localStorage.clear();
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser)
            setUser(JSON.parse(loggedInUser));
    }, [setUser, localStorage.getItem('user')]);

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
                    {/* <form action='/addWit'>
                        <button type="submit" className='m-2 btn btn-primary btn-lg btn-block' value="addWit">Add new Wit</button><br />
                    </form> */}
                    <AddWit />

                </>
                :
                <>
                    <h5>You are not logged in.</h5>
                    {/* <form action='/login'>
                        <button type="submit" className='m-1 btn btn-success' value="Login">Login</button><br />
                    </form> */}
                    <Login />
                    {/* <Link className='link' to="/register">Register</Link><br /> */}
                </>
            }
        </div>
    )
}

export default User;