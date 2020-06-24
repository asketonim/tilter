import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookmarksPage from './pages/BookmarksPage';
import AuthPage from './pages/AuthPage';

const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/bookmarks" exact>
          <BookmarksPage />
        </Route>
        <Redirect to="/home" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default useRoutes;
