import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="dragon-news-logo" /> ,<br />
          <p className='mb-2'>Jurnalism Without Fear of Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;