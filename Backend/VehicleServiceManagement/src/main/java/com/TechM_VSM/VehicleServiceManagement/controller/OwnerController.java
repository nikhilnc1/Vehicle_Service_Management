package com.TechM_VSM.VehicleServiceManagement.controller;

import com.TechM_VSM.VehicleServiceManagement.dto.OwnerDto;
import com.TechM_VSM.VehicleServiceManagement.dto.VehicleDto;
import com.TechM_VSM.VehicleServiceManagement.service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/owner")
//@CrossOrigin()
public class OwnerController {
    @Autowired
    private OwnerService ownerService;
    @PostMapping("/add")
    public ResponseEntity<?> addOwner(@RequestBody OwnerDto ownerDto) {
        OwnerDto createdOwnerDto = ownerService.saveOwner(ownerDto);
        if(createdOwnerDto == null) return new ResponseEntity<>("Owner not created", HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(createdOwnerDto, HttpStatus.CREATED);
    }



}
