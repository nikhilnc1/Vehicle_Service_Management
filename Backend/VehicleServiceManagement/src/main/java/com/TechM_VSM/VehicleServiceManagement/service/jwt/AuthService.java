package com.TechM_VSM.VehicleServiceManagement.service.jwt;

import org.springframework.security.core.userdetails.UserDetailsService;

public interface AuthService {
	
	UserDetailsService userDetailsService();

}
