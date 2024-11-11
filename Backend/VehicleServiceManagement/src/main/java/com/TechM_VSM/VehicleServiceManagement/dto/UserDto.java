package com.TechM_VSM.VehicleServiceManagement.dto;

import com.TechM_VSM.VehicleServiceManagement.model.Role;
import lombok.Data;

@Data
public class UserDto {
    private int uId;
    private String Name;
    private String email;
    private Role role;


}
