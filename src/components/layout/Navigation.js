import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../layout/react-logo.png';

const Navigation = ({ title }) => {
  return (
    <Fragment>
      <div className='navbar bg-primary'>
        <a href='/'>
          <p className='nav-title'>
            {/* <img id='app-logo' src={logo} alt='React Logo' />
            &nbsp; */}
            {title}
          </p>
        </a>
        <div id='links'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/notes'>Notes</Link>
            </li>
            <li>
              <Link to='/shorts'>Shorts</Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

Navigation.defaultProps = {
  title: 'Dev Blog',
};

export default Navigation;
