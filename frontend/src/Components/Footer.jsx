import React from 'react';
import wilLogo from '../images/wil-logo.png';

const Footer = () => {
    return (
        <div className='navbar fixed-bottom container-fluid'>
            <p className='container-lg col-6'>&copy; A MongoDB, Express, React and  Node.js App by Wil Treasure</p> <a className='home-link' target="blank" href="http://wiltreasure.co.uk">wiltreasure.co.uk</a>
            <img src={wilLogo} className='mh-100 ' alt="Wil Treasure text" />
        </div>
    )
}

export default Footer;