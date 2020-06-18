import React from 'react';

import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import Info from './Info/Info';
import Text from './Text/Text';

import classes from './Post.module.css';

const Post = () => (
  <article className={classes.Post}>
    <div className={classes.Content}>
      <div>
        <ProfilePhoto />
      </div>
      <div className={classes.ContentField}>
        <Info />
        <Text />
      </div>
    </div>
    <div className={classes.Controls}>
      <div>
        Likes
      </div>
      <div>
        Edit
      </div>
    </div>
  </article>
);

export default Post;
