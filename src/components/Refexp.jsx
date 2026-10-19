import { useRef } from 'react';

export default function Refexp() {
  const box = useRef(null);

  const Circle = () => {
box.current.style.borderRadius = '50%';
box.current.style.background = 'tomato';
  };

  return (
    <div style={{display: 'flex',flexDirection: 'column',gap: '20px',alignItems: 'center' }}>
  
      <div 
        ref={box} 
        style={{width: '100px',height: '100px',background: 'blue',transition: ' 0.3s' }} 
      />
      
      <button onClick={Circle}>Turn into Circle</button>
    </div>
  );
}
