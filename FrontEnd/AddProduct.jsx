import axios from "axios";
import { useEffect, useState } from "react";

function AddProduct() {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    category: '',
    imageUrl: '',
  });

  // Fetch product data if needed
  useEffect(() => {
    // Uncomment if fetching a single product to edit
    // fetch(`http://localhost:7531/products/1`) // Assuming you're fetching product with ID = 1
    //   .then(response => response.json())
    //   .then(data => setProduct(data))
    //   .catch(error => console.error("Error fetching product:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target; // Corrected 'targer' to 'target'
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:7531/products/add`, product)
      .then(response => {
        console.log('Product added successfully', response.data);
        setProduct({
          id: '',
          name: '',
          description: '',
          price: '',
          category: '',
          imageUrl: '',
        });
      })
      .catch(error => console.error('Error adding product:', error));
  };

  return (
    <div>
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="np">
          <label>ID:</label>
          <input
            className="ip"
            type="text"
            name="id"
            value={product.id}
            onChange={handleChange}
          />
        </div>
        <div className="np">
          <label>Name:</label>
          <input
            className="ip"
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div className="np">
          <label>Description:</label>
          <textarea
            className="ip"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div className="np">
          <label>Price:</label>
          <input
            className="ip"
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="np">
          <label>Category:</label>
          <input
            className="ip"
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </div>
        <div className="np">
          <label>Image URL:</label>
          <input
            className="ip"
            type="text"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
