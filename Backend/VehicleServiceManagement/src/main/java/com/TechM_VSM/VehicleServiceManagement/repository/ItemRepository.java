package com.TechM_VSM.VehicleServiceManagement.repository;

import com.TechM_VSM.VehicleServiceManagement.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {

    Item findByid(int id);

}
