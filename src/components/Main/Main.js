import React, { useState, useEffect } from 'react';

import { get } from '../../requests';

import AddPost from './AddPost/AddPost';
import Post from './Post/Post';

import classes from './Main.module.css';

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    get('/posts.json')
      .then((response) => {
        setPosts(response.data ? Object.values(response.data) : []);
      });
  }, []);

  const postsToRender = posts.map((post) => (
    <Post
      key={Math.random()}
      post={post}
    />
  ));

  return (
    <main className={classes.Main}>
      <AddPost
        posts={posts}
        setPosts={setPosts}
      />
      { postsToRender }
    </main>
  );
};

export default Main;
