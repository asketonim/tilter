import React, { useState, useContext } from 'react';

import PropTypes from 'prop-types';

import { post } from '../../../requests';

import classes from './AddPost.module.css';
import AuthContext from '../../../context/AuthContext';

const AddPost = ({ posts, setPosts }) => {
  const auth = useContext(AuthContext);
  const [newPost, setNewPost] = useState('');

  const textarea = document.getElementsByTagName('textarea');
  function onInput() {
    this.style.height = 'auto';
    this.style.height = `${this.scrollHeight} px`;
  }

  for (let i = 0; i < textarea.length; i++) {
    textarea[i].setAttribute('style', `height:  ${textarea[i].scrollHeight}px;overflow-y:hidden;`);
    textarea[i].addEventListener('input', onInput, false);
  }

  const handleClick = () => {
    const postToPost = {
      username: auth.username,
      content: newPost,
      time: (new Date()).getTime(),
      id: Math.round((new Date()).getTime() * Math.random())
    };

    post('/posts.json', postToPost)
      .then(() => {
        setPosts([...posts, postToPost]);
        setNewPost('');
      });
  };

  return (
    <div className={classes.AddPost}>
      <textarea
        className={classes.AddPostTextarea}
        placeholder="What's new?"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />
      <div className={classes.SubmitButtonHolder}>
        <button
          className={classes.SubmitButton}
          type="button"
          onClick={handleClick}
        >
          Post
        </button>
      </div>
    </div>
  );
};

AddPost.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    content: PropTypes.string,
    time: PropTypes.number
  })),
  setPosts: PropTypes.func
};

export default AddPost;
