
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import lightbulb from '../images/lightbulb.svg';
import { useState, useEffect } from 'react';
import { registerUser } from './async/userAPIcalls';

const Register = () => {

    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (success) navigate('/login');
    }, [success])

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
        setSuccess(false);

        const res = await registerUser(user);

        if (res.status === 200) {
            alert(res.message);
            setUser({ email: ``, password: ``, name: ``, handle: `` }); // Resets the inputs
            setSuccess(true);
            return;
        }

        alert(res.error.message);
    }

    return (
        <div className='main container-fluid align-middle text-center '>
            <img className="lightbulb" src={lightbulb} alt='lightbulb logo' />
            <h3>Create new account</h3>
            <p>
                Already have an account?&nbsp;<Link to="/login">Sign In</Link>
            </p>
            <form onSubmit={register}>
                <input className="m-1" type="text" id="create-account-name" value={user.name} name="name" placeholder="Full Name" onChange={handleChange} required />
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