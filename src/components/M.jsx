import React, { useCallback, useMemo, useState } from 'react';
import N from './N';

function M() {
  const [count, setCount] = useState(0)
  const [nub, setNub] = useState([12, 23, 34, 5])
  const [val, setVal] = useState(0)

// exp of callback
  const inc = useCallback(() => {
    setCount((prevCount) => {
      const nextCount = prevCount + 1;
      if (nextCount % 10 === 0) {
        setVal(nextCount)
      }
      return nextCount
    })
  }, []) 

 // exp of memo 
  const total = useMemo(() => {
    console.log('total calculated')
    return nub.reduce((a, b) => a + b, 0)
  }, [nub])

  return (
    <div>
      <h3>M Parent component</h3>
      <h1>{count}</h1>
      <button onClick={inc}>Increment</button>
      <hr />
      <h1>{total}</h1>
      <button onClick={() => setNub([3, 4, 5])}>change</button>
   
      <N value={val} incre={inc} />
    </div>
  );
}

export default M;
