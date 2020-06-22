import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { post } from '../../../requests';

import classes from './AddPost.module.css';

const AddPost = ({ user, posts, setPosts }) => {
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
