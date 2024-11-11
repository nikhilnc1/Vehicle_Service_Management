package com.TechM_VSM.VehicleServiceManagement.repository;

import com.TechM_VSM.VehicleServiceManagement.model.CartItem;
import com.TechM_VSM.VehicleServiceManagement.model.ServiceStatus;
import com.TechM_VSM.VehicleServiceManagement.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<CartItem, Integer> {


    Optional<List<CartItem>> findByvId(int vId);
}
