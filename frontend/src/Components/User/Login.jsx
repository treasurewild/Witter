import React from 'react';
import { useState } from 'react';
import { submitLogin } from '../../async/userAPIcalls';
const Login = ({ setCurrentUser, setRegister }) => {

    const [user, setUser] = useState({
        email: ``,
        password: ``
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const login = async (e) => {
        e.preventDefault();
        const res = await submitLogin(user)
        if (res.user) {
            alert(res.message);

            localStorage.setItem(`user`, JSON.stringify(res.user))
            setCurrentUser(JSON.parse(localStorage.getItem('user')));
            return;
        }
        alert(res.message);
    }

    return (
        <>
            <h3>Login</h3>
            <form onSubmit={login}>
                <input className="m-1" aria-label="text" type="text" name='email' value={user.email} onChange={handleChange} placeholder='Email address' required />
                <br />
                <input className="m-1" type='password' aria-label="password" name="password" value={user.password} onChange={handleChange} placeholder='Password' required />
                <br />
                <button className="m-2 btn btn-success">Login</button>
            </form>
            <button className='btn link-primary' onClick={() => setRegister(false)}>Sign up for a free account</button>
        </ >
    )
}

export default Login;