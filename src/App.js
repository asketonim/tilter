import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import AuthContext from './context/AuthContext';
import useAuth from './hooks/auth.hook';
import useRoutes from './routes';

function App() {
  const {
    token,
    login,
    logout,
    userId
  } = useAuth();

  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider
      value={{
        token, login, logout, userId, isAuthenticated
      }}
    >
      <div>
        <Router>
          {routes}
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
