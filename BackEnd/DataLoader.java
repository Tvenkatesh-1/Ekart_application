package com.Ecart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public void run(String... args) {
        List<Product> products = Arrays.asList(
                new Product(null, "Laptop", "High-performance laptop", 1200.00, "Electronics", "https://5.imimg.com/data5/QN/UG/MY-19275537/apple-500x500.jpeg"),
                new Product(null, "Smartphone", "Latest model smartphone", 800.00, "Electronics", "https://phonebox.com.mt/wp-content/uploads/2024/09/appleiphone16plus512gbultramarineblue-1725972288-6.png"),
                new Product(null, "Headphones", "Noise-cancelling headphones", 150.00, "Accessories", "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671363"),
                new Product(null, "Office Chair", "Ergonomic office chair", 200.00, "Furniture", "https://bantia.in/cdn/shop/products/bei-6_800x.jpg?v=1661508745"),
                new Product(null, "Coffee Maker", "Automatic coffee maker", 70.00, "Appliances", "https://s.alicdn.com/@sc04/kf/He7fd69356a7a46f8a7f2c48917cca23bj.png_300x300.jpg"),
                new Product(null, "Running Shoes", "Comfortable running shoes", 50.00, "Sportswear", "https://img.tatacliq.com/images/i13/1348Wx2000H/MP000000019536264_1348Wx2000H_202310021552163.jpeg"),
                new Product(null, "Backpack", "Waterproof backpack", 40.00, "Accessories", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtNQCVIZytWHTzVq_SRNsXY3GpfBYaxvFCw&s"),
                new Product(null, "Desk Lamp", "LED desk lamp with dimmer", 25.00, "Furniture", "https://m.media-amazon.com/images/I/71RBlpE8s1L.jpg")
        );

        productRepository.saveAll(products);
        System.out.println("Sample products loaded into the database.");
    }
}
