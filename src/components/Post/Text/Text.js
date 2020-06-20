import React from 'react';

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

export default Text;
