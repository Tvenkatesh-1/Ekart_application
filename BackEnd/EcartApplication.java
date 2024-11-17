package com.Ecart;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan
public class EcartApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcartApplication.class, args);
	}

}
