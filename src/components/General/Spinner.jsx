import React from 'react';
import '../../css/spinner.css';

function Spinner() {
  return (
    <div className='Center'>
      <div className='lds-dual-ring' />
    </div>
  );
}

export default Spinner;