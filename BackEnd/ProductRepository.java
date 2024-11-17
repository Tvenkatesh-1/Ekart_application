package com.Ecart;

import java.util.List;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.JpaRepository;

@ComponentScan
public interface ProductRepository extends JpaRepository<Product, Long>{
List<Product> findByNameContaining(String name);
List<Product> findByCategoryAndPriceBetween(String category,Double minPrice,Double maxPrice);
}
