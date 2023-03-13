import React from 'react';
import { Link } from 'react-router-dom';

const User = () => {
    return (
        <div className='user text-center rounded'>
            <h5>You are not logged in.</h5>
            <form action='/login'>
                <button type="submit" className='btn btn-success' value="Login">Login</button><br />
            </form>
            <Link className='link' to="/register">Register</Link>
        </div>
    )
}

export default User;