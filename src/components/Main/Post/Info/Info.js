import React from 'react';

import PropTypes from 'prop-types';

const Info = ({ author, time }) => {
  const parseDate = (milliseconds) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(milliseconds);
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <div>
      {`${author.name} @${author.username} ${parseDate(time)}`}
    </div>
  );
};

Info.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string
  }),
  time: PropTypes.number
};

export default Info;
