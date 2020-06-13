import React from 'react';

import './LoadingSpinner.css';

const LoadingSpinner = props => {
  return (
    <div className='spinner'>
      <div className="lds-hourglass"></div>
    </div>

  );
};

export default LoadingSpinner;
