import React from 'react';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';

import classes from './Controls.module.css';

const Controls = () => (
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
);

export default Controls;
