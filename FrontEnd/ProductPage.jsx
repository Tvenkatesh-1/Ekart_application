import {  NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductListing from "./ProductListing";
import ProductDetails from "./ProductDetails";
import AddProduct from "./AddProduct";

import Cart from "./cart";
import Category from "./Category";
import SearchProduct from "./SearchProduct";
function ProductPage() {
    return (
    <div><Router>
        <nav className='Listofproducts'>
          <li className="home"><NavLink to="/product" style={({isActive})=>({color:isActive?"black":"white"})}>Home</NavLink></li>
          <li className="Addproducts"><NavLink to="/addproduct" style={({isActive})=>({color:isActive?"black":"white"})}>Add Product</NavLink></li>
          <li className="Category"><NavLink style={({isActive})=>({color:isActive?"Black":"white"})} to="/category">Category</NavLink></li>
          <button className="cartsymbol"><NavLink to="cart">🛒</NavLink></button>
          <li ><NavLink to="/search" style={({isActive})=>({color:isActive?"black":"white"})}>Search</NavLink ></li>
        </nav>
        <Routes>
          <Route path="/product" element={<ProductListing/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/category" element={<Category/>} />
          <Route path="/search" element={<SearchProduct/>} />

          <Route path="/addproduct" element={<AddProduct/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
          {/* <Route path="/product/search" element={<SearchProduct/>} /> */}

        </Routes>
      </Router>
      </div>);
} export default ProductPage;