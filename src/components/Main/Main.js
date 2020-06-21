import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { get } from '../../requests';

import AddPost from './AddPost/AddPost';
import Post from './Post/Post';

import classes from './Main.module.css';

const Main = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    get('/notes.json')
      .then((response) => {
        setPosts(Object.values(response.data));
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
        user={user}
        posts={posts}
        setPosts={setPosts}
      />
      { postsToRender }
    </main>
  );
};

Main.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string
  })
};

export default Main;
