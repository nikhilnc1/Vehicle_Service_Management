package com.TechM_VSM.VehicleServiceManagement.controller;

import com.TechM_VSM.VehicleServiceManagement.dto.CartDto;
import com.TechM_VSM.VehicleServiceManagement.dto.VehicleDto;
import com.TechM_VSM.VehicleServiceManagement.model.CartItem;
import com.TechM_VSM.VehicleServiceManagement.model.Item;
import com.TechM_VSM.VehicleServiceManagement.model.Vehicle;
import com.TechM_VSM.VehicleServiceManagement.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
@CrossOrigin()
public class CartController {
    @Autowired
    private CartService cartService;

    @PostMapping("/add")
    public ResponseEntity<?> addToCart(@RequestBody CartDto cartDto) {
        CartDto createdCartItemDto =cartService.saveItem(cartDto);
        if(createdCartItemDto == null) return new ResponseEntity<>("Vehical not created", HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(createdCartItemDto, HttpStatus.CREATED);
    }

    @GetMapping("getById/{id}")
    public ResponseEntity<List<CartItem>> getById(@PathVariable int id){
        return cartService.getCartByvId(id);
    }

}
