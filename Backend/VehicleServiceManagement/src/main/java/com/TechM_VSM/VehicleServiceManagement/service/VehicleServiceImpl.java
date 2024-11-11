package com.TechM_VSM.VehicleServiceManagement.service;

import com.TechM_VSM.VehicleServiceManagement.dto.VehicleDto;
import com.TechM_VSM.VehicleServiceManagement.model.ServiceStatus;
import com.TechM_VSM.VehicleServiceManagement.model.Vehicle;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import com.TechM_VSM.VehicleServiceManagement.repository.VehicleRepository;

import java.time.LocalDate;
import java.util.*;

@Service
@EnableScheduling
public class
VehicleServiceImpl implements VehicleService{
    @Autowired
    private VehicleRepository vehicleRepository;

    @Scheduled(cron = "0 54 23 * * *") // This will run once a day at midnight
    @Transactional
    public void updateStatus() {

        LocalDate twoMonthsAgo = LocalDate.now().minusMonths(2);
        vehicleRepository.updateStatusAndDate(twoMonthsAgo);
    }

    @Override
    public VehicleDto saveVehicle(VehicleDto vehicleDto) {
        Vehicle newvehical = new Vehicle();

        newvehical.setOwnerName(vehicleDto.getOwnerName());
        newvehical.setName(vehicleDto.getName());
        newvehical.setYear(vehicleDto.getYear());
        newvehical.setLicensePlate(vehicleDto.getLicensePlate());
        newvehical.setServiceStatus(vehicleDto.getServiceStatus() != null ? vehicleDto.getServiceStatus() : ServiceStatus.Pending);
        newvehical.setOEmail(vehicleDto.getOEmail());
        newvehical.setRegistrationDate(new Date());
        newvehical.setServiceDonedate(null);
        Vehicle createdvehicle = vehicleRepository.save(newvehical);
        VehicleDto vehicleDto1 = new VehicleDto();
        return vehicleDto1;
    }


    @Override
    public ResponseEntity<List<Vehicle>> getAllVehical() {
        return new ResponseEntity<>(vehicleRepository.findAll(),HttpStatus.OK);
    }

    @Override
    public Vehicle getvehicleById(int id) {
        Vehicle vehicle = vehicleRepository.findByid(id);
        return vehicle;
    }

    @Override
    public Vehicle updateStatus(int id, VehicleDto vehicleDetails) {
        Vehicle vehicle = vehicleRepository.findByid(id);

        vehicle.setSaEmail(vehicleDetails.getSaEmail());
        vehicle.setServiceStatus(vehicleDetails.getServiceStatus());
        Vehicle updatedVehicle = vehicleRepository.save(vehicle);
        return updatedVehicle;
    }

    @Override
    public Map<String, Boolean> deleteVehicle(int id) {
        Vehicle vehicle = vehicleRepository.findByid(id);
        vehicleRepository.delete(vehicle);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @Override
    public List<Vehicle> getVehiclesByServiceStatus(String serviceStatus) {
        ServiceStatus serviceStatusEnum = ServiceStatus.valueOf(serviceStatus); // Convert String to enum
        List<Vehicle> vehicles = vehicleRepository.findByServiceStatus(serviceStatusEnum);
        return vehicles;
    }



    @Override
    public Vehicle updateVehicle(int id, VehicleDto vehicleDetails) {
        Vehicle vehicle = vehicleRepository.findByid(id);

        vehicle.setName(vehicleDetails.getName());
        vehicle.setOwnerName(vehicleDetails.getOwnerName());
        vehicle.setOEmail(vehicleDetails.getOEmail());
        vehicle.setLicensePlate(vehicleDetails.getLicensePlate());
        vehicle.setYear(vehicleDetails.getYear());
        Vehicle updatedVehicle = vehicleRepository.save(vehicle);
        return updatedVehicle;

    }

    @Override
    public Vehicle updateStatus1(int id, VehicleDto vehicleDetails) {
        Vehicle vehicle = vehicleRepository.findByid(id);

        vehicle.setServiceStatus(vehicleDetails.getServiceStatus());
        System.out.println("h1llllwkd");
        System.out.println();
        String status = String.valueOf(vehicleDetails.getServiceStatus());
        System.out.println("Service Status: " + status);
        if(status.equals("Completed")){
            System.out.println("Service Status Inside If: " + status);
            System.out.println(LocalDate.now());
            vehicle.setServiceDonedate(LocalDate.now());
        }

        Vehicle updatedVehicle = vehicleRepository.save(vehicle);
        return updatedVehicle;
    }

    @Override
    public List<Vehicle> getByAdvisorAndStatus(String getemail) {
        List<Vehicle> resultList = vehicleRepository.findBySaEmail(getemail);


        return resultList;
    }


}
