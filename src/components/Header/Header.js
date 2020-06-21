import React from 'react';

import PropTypes from 'prop-types';

import classes from './Header.module.css';

const Header = ({ user }) => (
  <header className={classes.Header}>
    <h1 className={classes.Logo}>
      <a className={classes.Link} href="/">tilter</a>
    </h1>
    <nav className={classes.Tabs}>
      <a className={`${classes.Tab} ${classes.Link}`} href="/">Home</a>
      <a className={`${classes.Tab} ${classes.Link}`} href="/">
        {`@${user.username}`}
      </a>
      <a className={`${classes.Tab} ${classes.Link}`} href="/">Log in</a>
    </nav>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string
  })
};

export default Header;
