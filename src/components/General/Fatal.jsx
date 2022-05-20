import React from 'react';

function Fatal(props) {
  return (
    <h2 className='Center rojo'>
      { props.message }
    </h2>
  );
}

export default Fatal;