import React from 'react';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';

import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import Info from './Info/Info';
import Text from './Text/Text';


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
        <Text text={post.content} />
        <div className={classes.Controls}>
          <div className={classes.IconHolder}>
            <FavoriteBorderIcon color="action" />
          </div>
          <div className={classes.IconHolder}>
            <ChatBubbleOutlineRoundedIcon color="action" />
          </div>
          <div className={classes.IconHolder}>
            <BookmarkBorderIcon color="action" />
          </div>
        </div>
      </div>
    </div>
  </article>
);

export default Post;
