import React from 'react'
import lightbulb from '../images/lightbulb.svg'

const Header = () => {
    return (

        <div className='navbar fixed-top container-fluid'>
            <img src={lightbulb} className="col-1 mh-100 rounded float-start" alt="lightbulb Witter logo" />
            <h1 className='col-11'>Witter</h1>
        </div>


    )
}

export default Header;