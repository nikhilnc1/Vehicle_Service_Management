package com.TechM_VSM.VehicleServiceManagement.repository;

import com.TechM_VSM.VehicleServiceManagement.model.Owner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OwnerRepository extends JpaRepository<Owner, Integer> {
}
