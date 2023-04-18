import React from 'react';
import lightbulb from '../images/lightbulb.svg';

const Header = () => {
    return (
        <div className='navbar fixed-top home-link'>
            <img className='col-1 lightbulb' src={lightbulb} alt='lightbulb logo' />
            <h1 className='col-11'>Witter</h1>
        </div>
    )
}

export default Header;