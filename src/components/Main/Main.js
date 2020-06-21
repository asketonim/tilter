import React, { useState, useEffect } from 'react';

import { get } from '../../requests';

import AddPost from './AddPost/AddPost';
import Post from './Post/Post';

import classes from './Main.module.css';

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    get('/notes.json')
      .then((response) => {
        setPosts(Object.values(response.data));
      });
    // return notes;
  }, []);

  const postsToRender = posts.map((post) => (
    <Post
      key={Math.random()}
      post={post}
    />
  ));

  return (
    <main className={classes.Main}>
      <AddPost />
      { postsToRender }
    </main>
  );
};

export default Main;
