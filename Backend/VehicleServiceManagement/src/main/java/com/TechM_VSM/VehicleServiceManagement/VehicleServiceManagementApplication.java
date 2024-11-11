package com.TechM_VSM.VehicleServiceManagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class VehicleServiceManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(VehicleServiceManagementApplication.class, args);
	}

}
