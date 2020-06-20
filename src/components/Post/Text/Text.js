import React from 'react';

import PropTypes from 'prop-types';

const styleText = {
  margin: '8px 0',
  fontFamily: 'Calibri',
  lineHeight: '1.2'
};

const Text = ({ text }) => (
  <div style={styleText}>
    <p>{text}</p>
  </div>
);

Text.propTypes = {
  text: PropTypes.string.isRequired
};

export default Text;
