package com.TechM_VSM.VehicleServiceManagement.service;

import com.TechM_VSM.VehicleServiceManagement.dto.CartDto;
import com.TechM_VSM.VehicleServiceManagement.dto.VehicleDto;
import com.TechM_VSM.VehicleServiceManagement.model.CartItem;
import com.TechM_VSM.VehicleServiceManagement.model.Item;
import com.TechM_VSM.VehicleServiceManagement.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CartServiceImpl implements CartService{

    @Autowired
    private CartRepository cartRepository;


    @Override
    public CartDto saveItem(CartDto cartDto) {
        CartItem cartItem = new CartItem();

        cartItem.setItemName(cartDto.getItemName());
        cartItem.setQuantity(cartDto.getQuantity());
        cartItem.setItemCost(cartDto.getItemCost());
        cartItem.setVId(cartDto.getVId());

        CartItem createdCart = cartRepository.save(cartItem);
        CartDto cartDto1 = new CartDto();

        return cartDto1;
    }

    @Override
    public ResponseEntity<List<CartItem>> getCartByvId(int vId) {
        Optional<List<CartItem>> cartItems =cartRepository.findByvId(vId);
        return new ResponseEntity<>(cartRepository.findByvId(vId).get(), HttpStatus.OK);
    }
}
