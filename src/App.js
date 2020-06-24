import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import useRoutes from './routes';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [user, setUser] = useState({});

  const routes = useRoutes(true);

  useEffect(() => setUser({
    name: 'Anton',
    username: 'asketonim'
  }), []);

  return (
    <div>
      <Header user={user} />
      <Router>
        {routes}
      </Router>
      <Main user={user} />
    </div>
  );
}

export default App;
