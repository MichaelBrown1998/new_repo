package com.trilogyed.motoserviceregistry;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class MotoServiceRegistryApplication {

	public static void main(String[] args) {
		SpringApplication.run(MotoServiceRegistryApplication.class, args);
	}

}
