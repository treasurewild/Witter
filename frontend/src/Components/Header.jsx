import React from 'react';
import lightbulb from '../images/lightbulb.svg';

const Header = () => {
    return (
        <div className='navbar fixed-top d-flex justify-content-center'>
            <img className='lightbulb' src={lightbulb} alt='lightbulb logo' />
            <h1>Witter</h1>
        </div>
    )
}

export default Header;