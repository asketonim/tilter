import { createContext } from 'react';

function foo() {}

const AuthContext = createContext({
  token: null,
  userId: null,
  login: foo,
  logout: foo,
  username: null,
  isAuthenticated: false
});

export default AuthContext;
