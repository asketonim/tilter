import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';

import AuthContext from './context/AuthContext';
import useAuth from './hooks/auth.hook';
import useRoutes from './routes';

function App() {
  const {
    token,
    login,
    logout,
    userId,
    username
  } = useAuth();

  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider
      value={{
        token, login, logout, userId, username, isAuthenticated
      }}
    >
      <div>
        <Router>
          { isAuthenticated && <Header /> }
          {routes}
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
