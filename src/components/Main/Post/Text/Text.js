import React from 'react';

import PropTypes from 'prop-types';

const styleText = {
  margin: '8px 0',
  fontFamily: 'Calibri',
  lineHeight: '1.2',
  wordBreak: 'break-all',
  wordWrap: 'break-word'
};

const Text = ({ text }) => (
  <div style={styleText}>
    {text}
  </div>
);

Text.propTypes = {
  text: PropTypes.string.isRequired
};

export default Text;
