package com.TechM_VSM.VehicleServiceManagement.controller;

import com.TechM_VSM.VehicleServiceManagement.dto.UserDto;
import com.TechM_VSM.VehicleServiceManagement.dto.VehicleDto;
import com.TechM_VSM.VehicleServiceManagement.model.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.TechM_VSM.VehicleServiceManagement.service.VehicleService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/vehicle")
//@CrossOrigin()
public class VehicleController {
    @Autowired
    private VehicleService vehicleService;
    @PostMapping("/add")
    public ResponseEntity<?> addVehicle(@RequestBody VehicleDto vehicleDto) {
        VehicleDto createdVechicalDto = vehicleService.saveVehicle(vehicleDto);
        if(createdVechicalDto == null) return new ResponseEntity<>("Vehical not created",HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(createdVechicalDto, HttpStatus.CREATED);
    }
    @GetMapping("/getAll")
    public ResponseEntity<List<Vehicle>> getAllVehicles() {
        return vehicleService.getAllVehical();
    }

    @GetMapping("getById/{id}")
    public ResponseEntity<Vehicle> getById(@PathVariable int id){
        Vehicle vehicle = vehicleService.getvehicleById(id);
        return new ResponseEntity<>(vehicle,HttpStatus.OK);
    }

    @GetMapping("getByServiceStatus/{serviceStatus}")
    public ResponseEntity<List<Vehicle>> getByServiceStatus(@PathVariable String serviceStatus) {
        List<Vehicle> vehicles = vehicleService.getVehiclesByServiceStatus(serviceStatus);
        return new ResponseEntity<>(vehicles, HttpStatus.OK);
    }


    @PutMapping("status/{id}")
    public ResponseEntity<?> updateStatus(@PathVariable int id,@RequestBody VehicleDto vehicleDetails){
        Vehicle updateVehicleDto = vehicleService.updateStatus(id, vehicleDetails);
        if(updateVehicleDto == null) return new ResponseEntity<>("Vehical not updated",HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(updateVehicleDto, HttpStatus.CREATED);
    }

    @PutMapping("status/bystatus/{id}")
    public ResponseEntity<?> updateStatusAdv(@PathVariable int id,@RequestBody VehicleDto vehicleDetails){
        System.out.println("hello1");
        Vehicle updateVehicleDto = vehicleService.updateStatus1(id, vehicleDetails);
        if(updateVehicleDto == null) return new ResponseEntity<>("Vehical not updated",HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(updateVehicleDto, HttpStatus.CREATED);
    }

    @PutMapping("update/{id}")
    public ResponseEntity<?> updateVehicle(@PathVariable int id,@RequestBody VehicleDto vehicleDetails){
        Vehicle updateVehicleDto = vehicleService.updateVehicle(id, vehicleDetails);
        if(updateVehicleDto == null) return new ResponseEntity<>("Vehical not updated",HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(updateVehicleDto, HttpStatus.CREATED);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteVehicle(@PathVariable int id) {
        Map<String, Boolean> response = vehicleService.deleteVehicle(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }


}
