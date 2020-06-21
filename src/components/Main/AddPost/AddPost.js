import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { post } from '../../../requests';

import classes from './AddPost.module.css';

const AddPost = ({ user, posts, setPosts }) => {
  const [newPost, setNewPost] = useState('');

  const handleClick = () => {
    const postToPost = {
      author: {
        name: user.name || 'noname',
        username: user.username || 'guest'
      },
      content: newPost,
      time: (new Date()).getTime()
    };

    post('/posts.json', postToPost)
      .then(() => {
        setPosts([...posts, postToPost]);
      });
  };

  return (
    <div className={classes.AddPost}>
      <textarea
        placeholder={`TextField for ${user.name ? `${user.name} aka ` : 'you, '} ${user.username}!`}
        onChange={(e) => setNewPost(e.target.value)}
      />
      <button
        type="button"
        onClick={handleClick}
      >
        Post
      </button>
    </div>
  );
};

AddPost.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string
  }),
  posts: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string,
      username: PropTypes.string
    }),
    content: PropTypes.string,
    time: PropTypes.number
  })),
  setPosts: PropTypes.func
};

export default AddPost;
