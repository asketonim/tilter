import React from 'react';

import PropTypes from 'prop-types';

import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import Info from './Info/Info';
import Text from './Text/Text';
import Controls from './Controls/Controls';


import classes from './Post.module.css';

const Post = ({ post }) => (
  <article className={classes.Post}>
    <div className={classes.Content}>
      <div>
        <ProfilePhoto />
      </div>
      <div className={classes.ContentField}>
        <Info
          author={post.author}
          time={post.time}
        />
        <Text
          text={post.content}
        />
        <Controls />
      </div>
    </div>
  </article>
);

Post.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string,
      username: PropTypes.string
    }),
    content: PropTypes.string,
    time: PropTypes.number
  })
};

export default Post;
