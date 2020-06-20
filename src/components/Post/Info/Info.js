import React from 'react';

const Info = ({ author, time }) => (
  <div>
    {`${author.name} @${author.username} ${time}`}
  </div>
);

export default Info;
