package com.trilogyed.hoteledge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class HotelEdgeApplication {

	public static void main(String[] args) {
		SpringApplication.run(HotelEdgeApplication.class, args);
	}

}
