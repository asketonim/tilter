import React, { useContext } from 'react';

import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';

import classes from './Header.module.css';
import AuthContext from '../../context/AuthContext';

const Header = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };

  return (
    <header className={classes.Header}>
      <h1 className={classes.Logo}>
        <a className={classes.Link} href="/home">tilter</a>
      </h1>
      <nav className={classes.Tabs}>
        <NavLink className={`${classes.Tab} ${classes.Link}`} to="/home">Home</NavLink>
        <NavLink className={`${classes.Tab} ${classes.Link}`} to="/bookmarks">Bookmarks</NavLink>
        <NavLink className={`${classes.Tab} ${classes.Link}`} to="/home">
          {`@${auth.username}`}
        </NavLink>
        <a
          className={`${classes.Tab} ${classes.Link}`}
          href="/"
          onClick={logoutHandler}
        >
          Log out
        </a>
      </nav>
    </header>
  );
};
Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string
  })
};

export default Header;
