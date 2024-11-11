package com.TechM_VSM.VehicleServiceManagement.dto;
import com.TechM_VSM.VehicleServiceManagement.model.ServiceStatus;
import lombok.Data;

import java.time.LocalDate;

@Data
public class VehicleDto {
    private int id;
    private String ownerName;
    private String name;
    private int year;
    private String licensePlate;
    private String oEmail;
    private String saEmail;
    private ServiceStatus serviceStatus;


}
