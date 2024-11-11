package com.TechM_VSM.VehicleServiceManagement.service;

import com.TechM_VSM.VehicleServiceManagement.dto.OwnerDto;
import com.TechM_VSM.VehicleServiceManagement.model.Owner;
import com.TechM_VSM.VehicleServiceManagement.model.User;
import com.TechM_VSM.VehicleServiceManagement.repository.OwnerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OwnerServiceImpl implements OwnerService{

    @Autowired
    private OwnerRepository ownerRepository;

    @Override
    public OwnerDto saveOwner(OwnerDto ownerDto) {
        Owner owner = new Owner();
        owner.setOName(ownerDto.getOName());
        owner.setONo(ownerDto.getONo());
        owner.setOEmail(ownerDto.getOEmail());
        Owner createdOwner = ownerRepository.save(owner);
        OwnerDto responseDto = new OwnerDto();
        responseDto.setOwnerId(createdOwner.getOwnerId());
        return responseDto;
    }
}
