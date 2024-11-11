package com.TechM_VSM.VehicleServiceManagement.service;

import com.TechM_VSM.VehicleServiceManagement.dto.ItemDto;
import com.TechM_VSM.VehicleServiceManagement.dto.VehicleDto;
import com.TechM_VSM.VehicleServiceManagement.model.Item;
import com.TechM_VSM.VehicleServiceManagement.model.Vehicle;
import com.TechM_VSM.VehicleServiceManagement.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ItemServiceImpl implements ItemService{
    @Autowired
    private ItemRepository itemRepository;
    @Override
    public ItemDto saveItem(ItemDto itemDto) {
        Item item = new Item();
        item.setItemName(itemDto.getItemName());
        item.setItemDescription(itemDto.getItemDescription());
        item.setItemCost(itemDto.getItemCost());
        Item createdItem = itemRepository.save(item);
        ItemDto itemDto1 = new ItemDto();
        itemDto1.setId(createdItem.getId());
        return itemDto1;
    }

    @Override
    public ResponseEntity<List<Item>> getAll() {
        return new ResponseEntity<>(itemRepository.findAll(), HttpStatus.OK);
    }

    @Override
    public Map<String, Boolean> deleteItem(int id) {
        Item item = itemRepository.findByid(id);
        itemRepository.delete(item);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @Override
    public ResponseEntity<Item> getitemById(int id) {
        Optional<Item> item = itemRepository.findById(id);
        return new ResponseEntity<>(item.get(),HttpStatus.OK);
    }

    @Override
    public Item updateItem(int id, ItemDto itemDto) {
        Item item = itemRepository.findByid(id);

        item.setItemName(itemDto.getItemName());
        item.setItemDescription(itemDto.getItemDescription());
        item.setItemCost(itemDto.getItemCost());
        Item updatedItem = itemRepository.save(item);
        return updatedItem;
    }


}
