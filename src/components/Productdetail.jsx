import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Productdetail() {
  const [pro, setpro] = useState(null);
  const { id } = useParams();

  const fetchProduct = async () => {
    try {
     
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setpro(data);
    } catch (error) {
      alert('Something went wrong');
    }
  };

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    <div>
      <h2>Product Detail {id}</h2>
      {pro ? (
        <div>
          <h3>{pro.title}</h3>
          <p>{pro.description}</p>
          <p>Price: \${pro.price}</p>
          <img src={pro.image} alt={pro.title} style={{ width: '150px' }} />
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

export default Productdetail;
