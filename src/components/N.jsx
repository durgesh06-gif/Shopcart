import React from 'react';

function N({ value,incre }) { 
  console.log('inside N component, current value:', value);
    
  return (
    <div>
      <p>Children Value: {value} </p>
      <button onClick={incre}>incre</button>
    </div>
  );
}


export default React.memo(N);
