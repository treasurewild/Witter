
import React from 'react';
import { useState } from 'react';
import { registerUser } from './async/userAPIcalls';

const Register = ({ setRegister }) => {

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

    const register = async (e) => {
        e.preventDefault();

        const res = await registerUser(user);

        if (res.status === 200) {
            alert(res.message);

            setUser({ email: ``, password: ``, name: ``, handle: `` }); // Resets the inputs
            return;
        }
        alert(res.message);
    }

    return (
        <>
            <h3>Create new account</h3>
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
            <button className='btn link-primary' onClick={() => setRegister(true)}>Already have an account?&nbsp; Sign In</button>
        </>
    )
}

export default Register;