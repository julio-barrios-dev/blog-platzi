import React from 'react';
import '../../css/spinner.css';

function Spinner(props) {
  return (
    <div className='Center'>
      <div className='lds-dual-ring' />
    </div>
  );
}

export default Spinner;