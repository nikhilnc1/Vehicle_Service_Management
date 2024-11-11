package com.TechM_VSM.VehicleServiceManagement.dto;

import com.TechM_VSM.VehicleServiceManagement.model.Role;
import lombok.Data;

@Data
public class SignupRequest
{
    private String email;
    private String name;
    private String password;
    private Role role;
}
