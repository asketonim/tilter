import React from 'react';

import PropTypes from 'prop-types';

const Info = ({ author, time }) => (
  <div>
    {`${author.name} @${author.username} ${time}`}
  </div>
);

Info.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string
  }),
  time: PropTypes.string.isRequired
};

export default Info;
