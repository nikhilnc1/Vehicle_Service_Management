package com.TechM_VSM.VehicleServiceManagement.dto;

import com.TechM_VSM.VehicleServiceManagement.model.Role;
import lombok.Data;

@Data
public class AuthenticationResponse {
	
	private String jwt;
	private Role role;
	private int userId;
	private String name;
	private String email;

	public AuthenticationResponse(String jwt, int id, Role role,String name, String email) {
		this.jwt = jwt;
		this.role = role;
		this.userId=id;
		this.name=name;
		this.email=email;
		
	}
	public AuthenticationResponse() {
		// TODO Auto-generated constructor stub
	}
	public String getJwt() {
		return jwt;
	}
	public void setJwt(String jwt) {
		this.jwt = jwt;
	}
	public Role getrole() {
		return role;
	}
	public void setrole(Role role) {
		this.role = role;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
}
