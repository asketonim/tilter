import React from 'react';

import PropTypes from 'prop-types';

const Info = ({ author, time }) => (
  <div>
    {`${author.name} @${author.username} ${time}`}
  </div>
);

Info.propTypes = {
  author: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default Info;
