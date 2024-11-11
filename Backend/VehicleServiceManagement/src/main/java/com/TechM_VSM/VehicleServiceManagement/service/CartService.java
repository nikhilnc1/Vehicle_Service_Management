package com.TechM_VSM.VehicleServiceManagement.service;

import com.TechM_VSM.VehicleServiceManagement.dto.CartDto;
import com.TechM_VSM.VehicleServiceManagement.model.CartItem;
import com.TechM_VSM.VehicleServiceManagement.model.Item;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CartService {


    CartDto saveItem(CartDto cartDto);

    ResponseEntity<List<CartItem>> getCartByvId(int id);
}
