package com.TechM_VSM.VehicleServiceManagement.controller;

import com.TechM_VSM.VehicleServiceManagement.dto.VehicleDto;
import com.TechM_VSM.VehicleServiceManagement.model.ServiceStatus;
import com.TechM_VSM.VehicleServiceManagement.model.Vehicle;
import com.TechM_VSM.VehicleServiceManagement.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/advisor")
@CrossOrigin()
public class AdvisorController {

    @Autowired
    private VehicleService vehicleService;

    @GetMapping("/getByAdvisorAndStatus/{getemail}")
    public ResponseEntity<List<Vehicle>> getByAdvisorAndStatus(@PathVariable String getemail) {

        List<Vehicle> resultList = vehicleService.getByAdvisorAndStatus(getemail);

        if (resultList.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(resultList);
    }


}
