import React from 'react';

import classes from './AuthPage.module.css';

const AuthPage = () => (
  <div className={classes.AuthPage}>
    <div className={classes.Label}>
      Authorization
    </div>
    <div className={classes.ButtonHolder}>
      <button className={classes.btn} type="button">
        Sign in
      </button>
      <button className={classes.btn} type="button">
        Sign up
      </button>
    </div>
  </div>
);

export default AuthPage;
