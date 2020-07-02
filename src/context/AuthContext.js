import { createContext } from 'react';

function foo() {}

const AuthContext = createContext({
  token: null,
  userId: null,
  login: foo,
  logout: foo,
  isAuthenticated: false
});

export default AuthContext;
