import { useEffect, useState } from "react";


function ProductListing() {
    const [products, setProducts] = useState([]);
    const [selectedproduct, setSelectedProduct] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        imageUrl: "",
    });
    useEffect(() => {
        fetch("http://localhost:7531/products/p")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Fetching data is not found..', error));
    }, [])
    const handleImageClick = (products) => {
        setSelectedProduct(products);
        setFormData({
            name: products.name,
            description: products.description,
            price: products.price,
            imageUrl: products.imageUrl,
        });
    };
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    const handleUpdate = (id) => {
        if (!formData.name || !formData.description || !formData.price || !formData.imageUrl) {
            alert("All fields are required.");
            return;
        }
    
        fetch(`http://localhost:7531/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to update product");
                }
            })
            .then(updatedProduct => {
                console.log("Product updated successfully:", updatedProduct);
                setProducts(prevProducts =>
                    prevProducts.map(product =>
                        product.id === updatedProduct.id ? updatedProduct : product
                    )
                );
                setSelectedProduct(null);
            })
            .catch(error => console.error("Error updating product:", error));
    };
    

    const handleDelete = (id) => {
        fetch(`http://localhost:7531/products/${id}`, {
            method: "DELETE",
        }).then(response => {
            if (response.ok) {
                console.log("product deleted..", id);
                setProducts(products.filter(p => p.id !== id));
            }
            else {
                throw new Error("Failed to delete product");
            }
        }).catch(error => console.error("Error deleting product:", error));
    };

    return (
        <div>
            <div className="product-list">
                {products.map(product => (<div key={product.id} className="product-id">
                    <img className="images" src={product.imageUrl} alt={product.name} onClick={() => handleImageClick(product)} />
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <button className="addcart">Add Cart</button>
                </div>))}
            </div>

            {selectedproduct && (<div className="product-options">
                <h3>options for {selectedproduct.name}</h3>
                <button onClick={() => handleDelete(selectedproduct.id)}>Delete</button>
                <button onClick={() => setSelectedProduct(null)}>Cancel</button>
            </div>)}

            {selectedproduct && (
                <div className="product-options">
                    <h3>Update Product: {selectedproduct.name}</h3>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleUpdate(selectedproduct.id);
                        }}
                    >
                        <div>
                            <label>Product Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div>
                            <label>Description:</label>
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div>
                            <label>Price:</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div>
                            <label>Image URL:</label>
                            <input
                                type="text"
                                name="imageUrl"
                                value={formData.imageUrl}
                                onChange={handleFormChange}
                            />
                        </div>
                        <button type="submit">Update Product</button>
                        <button type="button" onClick={() => setSelectedProduct(null)}>
                            Cancel
                        </button>
                    </form>
                </div>
            )}
        </div>);
} export default ProductListing;