package com.TechM_VSM.VehicleServiceManagement.service;

import com.TechM_VSM.VehicleServiceManagement.dto.VehicleDto;
import com.TechM_VSM.VehicleServiceManagement.model.Vehicle;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface VehicleService {
    
    public VehicleDto saveVehicle(VehicleDto vehicleDto);


    public ResponseEntity<List<Vehicle>> getAllVehical();

    public Vehicle getvehicleById(int id);


    public Vehicle updateStatus(int id, VehicleDto vehicleDetails);

    public Map<String, Boolean> deleteVehicle(int id);

    List<Vehicle> getVehiclesByServiceStatus(String serviceStatus);



    Vehicle updateVehicle(int id, VehicleDto vehicleDetails);

    Vehicle updateStatus1(int id, VehicleDto vehicleDetails);

    List<Vehicle> getByAdvisorAndStatus(String getemail);
}
