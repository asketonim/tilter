import React, { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => setUser({
    name: 'Anton',
    username: 'asketonim'
  }), []);

  return (
    <div>
      <Header user={user} />
      <Main user={user} />
    </div>
  );
}

export default App;
