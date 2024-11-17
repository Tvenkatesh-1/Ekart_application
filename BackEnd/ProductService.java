package com.Ecart;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	public List<Product>getAllProducts(){
		return productRepository.findAll();
	}
	
	
	public Product getProductById(Long id) {
		return productRepository.findById(id).orElse(new Product());
	}
	public List<Product > searchProductsByName(String name){
		return productRepository.findByNameContaining(name);
	}
	public List<Product> filterProducts(String category,Double minPrice,Double maxPrice){
		return productRepository.findByCategoryAndPriceBetween(category, minPrice, maxPrice);
	}
	public Product addnewProduct(Product product) {
		return productRepository.save(product);
	}
	
	public Product updateProduct(Long id, Product updatedProduct) {
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Product not found"));

       
        existingProduct.setName(updatedProduct.getName());
        existingProduct.setPrice(updatedProduct.getPrice());
        existingProduct.setDescription(updatedProduct.getDescription());
        existingProduct.setImageUrl(updatedProduct.getImageUrl());
      
        return productRepository.save(existingProduct);
    }
	public void deletProduct(Long id) {
		Product p=getProductById(id);
		productRepository.delete(p);
	}
}
