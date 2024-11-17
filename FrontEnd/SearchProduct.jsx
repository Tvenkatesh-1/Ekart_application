import React, { useState } from "react";
import axios from "axios";

function SearchProduct() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:7531/products/search`, {
        params: { name: searchTerm },
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <h2>Search Products</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter product name"
        />
        <button type="submit">Search</button>
      </form>

      <div className="search-results">
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((product) => (
              <li key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <img src={product.imageUrl} alt={product.name} style={{ width: "100px", height: "100px" }} /><br/>
                <button className="addcart">Add Cart</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchProduct;
