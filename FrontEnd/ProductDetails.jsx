import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:7531/products/${id}`)  // Update URL as needed
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  const handleImageClick = (id) => {
    // Navigate to the update page with the product ID
    navigate(`/update-product/${id}`);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} onClick={() => handleImageClick(product.id)}
              style={{ cursor: "pointer", width: "100px", height: "100px" }}/>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetails;
