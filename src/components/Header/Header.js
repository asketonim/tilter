import React from 'react';

import classes from './Header.module.css';

const Header = () => (
  <header className={classes.Header}>
    <h1 className={classes.Logo}>
      <a className={classes.Link} href="/">tilter</a>
    </h1>
    <nav className={classes.Tabs}>
      <a className={`${classes.Tab} ${classes.Link}`} href="/">Home</a>
      <a className={`${classes.Tab} ${classes.Link}`} href="/">@username</a>
      <a className={`${classes.Tab} ${classes.Link}`} href="/">Log in</a>
    </nav>
  </header>
);

export default Header;
