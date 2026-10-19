import React from 'react';

function ErrorPage({ message = "Something went wrong." }) {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Oops!</h1>
      <p>{message}</p>
    </div>
  );
}

export default ErrorPage;
