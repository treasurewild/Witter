import React from 'react';
import lightbulb from '../images/lightbulb.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = ({ setUser: setLoginUser }) => {

    const [user, setUser] = useState({
        email: ``,
        password: ``
    });

    const [loggedIn, setLoggedIn] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const login = async (e) => {
        e.preventDefault();
        const res = await axios.post(`${process.env.REACT_APP_WITS_URL}login`, user);
        alert(res.data.message);
        setLoginUser(res.data.user);
        setUser({ email: ``, password: `` });
        setLoggedIn(res.data.user);
    }

    return (
        <div className='main container-fluid align-middle text-center '>
            <img className="lightbulb" src={lightbulb} alt='lightbulb logo' />
            <h3>Login</h3>
            <form onSubmit={login}>
                <input className="m-1" type="text" name='email' value={user.email} onChange={handleChange} placeholder='Email address' />
                <br />
                <input className="m-1" type='password' name="password" value={user.password} onChange={handleChange} placeholder='Password' />
                <br />
                <button className="m-2 btn btn-success">Login</button>
            </form>
            <Link to="/register">
                Sign up for a free account
            </Link>
        </div>
    )
}

export default Login;