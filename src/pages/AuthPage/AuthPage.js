/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHttp } from '../../hooks/http.hook.js';

import classes from './AuthPage.module.css';

const AuthPage = () => {
  const {
    loading,
    error,
    request
  } = useHttp();

  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const formChangeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      console.log('Data', data);
    } catch (e) {}
  };

  return (
    <div className={classes.AuthPage}>
      <div className={classes.Label}>
        <h2>tilter</h2>
      </div>
      <div className={classes.AuthControls}>
        <div className={classes.FormHolder}>

          <div>
            <label>
              Username:
              <br />
              <input
                className={classes.Form}
                placeholder="Enter username"
                id="username"
                type="text"
                name="username"
                onChange={formChangeHandler}
                required
              />
            </label>
          </div>

          <div className={classes.Form}>
            <label>
              Password:
              <br />
              <input
                className={classes.Form}
                placeholder="Enter password"
                id="password"
                type="password"
                name="password"
                onChange={formChangeHandler}
                required
              />
            </label>
          </div>

        </div>
        <div className={classes.ButtonHolder}>
          <button className={classes.btn} type="button">
            Sign in
          </button>
          <button
            className={classes.btn}
            type="button"
            onClick={registerHandler}
            disabled={loading}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
