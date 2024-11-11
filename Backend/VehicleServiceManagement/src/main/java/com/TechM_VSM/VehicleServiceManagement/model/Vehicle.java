package com.TechM_VSM.VehicleServiceManagement.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String ownerName;
    private String name;
    private int year;
    private String licensePlate;
    private ServiceStatus serviceStatus;
    private String oEmail;
    private String saEmail;
    private Date registrationDate;
    private LocalDate ServiceDonedate;
}
