package com.trilogyed.hoteleureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class HotelEurekaApplication {

	public static void main(String[] args) {
		SpringApplication.run(HotelEurekaApplication.class, args);
	}

}
