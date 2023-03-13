import React from 'react';
import lightbulb from '../images/lightbulb.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <Link className="text-decoration-none navbar fixed-top container-fluid" to='/'>
            <img src={lightbulb} className="col-1 mh-100 rounded float-start" alt="lightbulb Witter logo" />
            <h1 className='col-11 home-link'>Witter</h1>
        </Link>

    )
}

export default Header;