package com.Ecart;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/p")
	public List<Product>getAllProducts(){
		return productService.getAllProducts();
	}
	@GetMapping("/{id}")
	public Product getProductById(@PathVariable Long id) {
		return productService.getProductById(id);
	}
	
	@GetMapping("/search")
	public List<Product> searchProductsByName(@RequestParam("name") String name){
		return productService.searchProductsByName(name);
	}
	
	@PostMapping("/add")
		public Product addProduct(@RequestBody Product p) {
			return productService.addnewProduct(p);
		}
	
	@GetMapping("/filter")
	public List<Product> filterProducts(@RequestParam(required = false) String category,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice) {
		return productService.filterProducts(category, minPrice, maxPrice);
	}
	
	@PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product) {
        Product updatedProduct = productService.updateProduct(id, product);
        return ResponseEntity.ok(updatedProduct);
    }
	@DeleteMapping("/{id}")
	public void DeleteProduct(@PathVariable Long id) {
		productService.deletProduct(id);
	}
}
