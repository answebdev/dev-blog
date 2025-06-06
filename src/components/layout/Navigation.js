import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../layout/dev-logo.webp';

const Navigation = ({ title }) => {
  return (
    <Fragment>
      <div className='navbar bg-primary'>
        <a href='/'>
          <p className='nav-title'>
            <img id='app-logo' src={logo} alt='CoderGuides Logo' />
            &nbsp;
            {title}
          </p>
        </a>
        <div id='links'>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/guides'>Guides</Link>
            </li>
            <li>
              <Link to='/notes'>Notes</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

Navigation.defaultProps = {
  title: 'CoderGuides',
};

export default Navigation;
