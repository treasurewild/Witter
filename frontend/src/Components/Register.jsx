import React from 'react';
import { Link } from 'react-router-dom';
import lightbulb from '../images/lightbulb.svg';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {

    const [user, setUser] = useState({
        name: ``,
        handle: ``,
        email: ``,
        password: ``
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    // it isnt registeing repeatedly now, but not giving error
    const register = async (e) => {
        e.preventDefault();
        const { name, handle, email, password } = user;
        if (name && handle && email && password) {
            const res = await axios.post(`${process.env.REACT_APP_WITS_URL}register`, user);
            alert(res.data.message);
            setUser({ email: ``, password: ``, name: ``, handle: `` }); // Resets the inputs
            return;
        }
    }

    return (
        <div className='main container-fluid align-middle text-center '>
            <img className="lightbulb" src={lightbulb} alt='lightbulb logo' />
            <h3>Create new account</h3>
            <p>
                Already have an account?&nbsp;<Link to="/login">Sign In</Link>
            </p>
            <form onSubmit={register}>
                <input className="m-1" type="text" id="create-account-name" value={user.name} name="name" placeholder="FullName" onChange={handleChange} required />
                <br />
                <input className="m-1" type="text" id="create-account-handle" value={user.handle} name="handle" placeholder="@userhandle" onChange={handleChange} required />
                <br />
                <input className="m-1" type="email" id="create-account-email" value={user.email} name="email" placeholder="Email" onChange={handleChange} required />
                <br />
                <input className="m-1" type="password" id="create-account-password" value={user.password} name="password" placeholder="Password" onChange={handleChange} required />
                <br />
                <button type="submit" className='btn btn-success m-2'>
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register;