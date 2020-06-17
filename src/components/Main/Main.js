import React from 'react';

import Post from '../Post/Post';

import classes from './Main.module.css';

const Main = () => (
  <main className={classes.Main}>
    <Post />
  </main>
);

export default Main;
