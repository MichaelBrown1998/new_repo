package com.trilogyed.motoconfigservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class MotoConfigServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(MotoConfigServiceApplication.class, args);
	}

}
