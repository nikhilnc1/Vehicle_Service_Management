package com.TechM_VSM.VehicleServiceManagement.dto;

import jakarta.persistence.Entity;
import lombok.Data;


@Data
public class CartDto {
    private int id;
    private String itemName;
    private double itemCost;
    private int quantity;
    private int vId;
}
