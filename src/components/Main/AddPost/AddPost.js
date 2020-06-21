import React from 'react';

import PropTypes from 'prop-types';

import classes from './AddPost.module.css';

const AddPost = ({ user }) => (
  <div className={classes.AddPost}>
    {`TextField for ${user.name ? `${user.name} aka ` : 'you, '} ${user.username}!`}
  </div>
);

AddPost.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string
  })
};

export default AddPost;
