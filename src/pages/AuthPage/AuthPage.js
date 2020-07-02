/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useContext } from 'react';
import { useHttp } from '../../hooks/http.hook.js';
import AuthContext from '../../context/AuthContext';

import classes from './AuthPage.module.css';

const AuthPage = () => {
  const {
    loading,
    error,
    request,
    clearError
  } = useHttp();

  const auth = useContext(AuthContext);

  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const formChangeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    clearError();
  };

  const registerHandler = async () => {
    try {
      await request('/api/auth/register', 'POST', { ...form });
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  useEffect(() => {
    setErrorMessage(error);
  }, [error, clearError]);


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

          { errorMessage }

        </div>
        <div className={classes.ButtonHolder}>
          <button
            className={classes.btn}
            type="button"
            onClick={loginHandler}
            disabled={loading}
          >
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
