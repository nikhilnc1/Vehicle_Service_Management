package com.TechM_VSM.VehicleServiceManagement.service;

import com.TechM_VSM.VehicleServiceManagement.dto.ItemDto;
import com.TechM_VSM.VehicleServiceManagement.model.Item;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface ItemService {
    ItemDto saveItem(ItemDto itemDto);

    ResponseEntity<List<Item>> getAll();


    Map<String, Boolean> deleteItem(int id);

    ResponseEntity<Item> getitemById(int id);

    Item updateItem(int id, ItemDto itemDto);
}
