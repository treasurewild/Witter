import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const User = ({ user, setUser }) => {

    const logOut = () => {
        setUser({});
        localStorage.clear();
    }

    // needed to do the useEffect here, not in the app component
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser)
            setUser(JSON.parse(loggedInUser));
    }, [setUser]);


    return (
        <div className='user shadow text-center rounded'>
            {localStorage.getItem('user') ?
                <>
                    <h5>You are posting as:</h5>
                    <div className='rounded user-box'>
                        <h5>{user.name}</h5>
                        <h5>@{user.handle}</h5>
                    </div>
                    <button type="submit" className='m-1 btn btn-secondary' value="Logout" onClick={() => logOut()}>Log Out</button>
                </>
                :
                <>
                    <h5>You are not logged in.</h5>
                    <form action='/login'>
                        <button type="submit" className='m-1 btn btn-success' value="Login">Login</button><br />
                    </form>
                    <Link className='link' to="/register">Register</Link><br />
                </>
            }
        </div>
    )
}

export default User;