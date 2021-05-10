package com.trilogyed.hospital.service;

import com.trilogyed.hospital.domain.EquipmentLocation;
import com.trilogyed.hospital.exception.NoSuchEquipmentException;
import com.trilogyed.hospital.util.feign.EquipmentLocationClient;
import feign.FeignException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceLayer {
    private EquipmentLocationClient client;

    @Autowired
    public ServiceLayer(EquipmentLocationClient client) {
        this.client = client;
    }

    public EquipmentLocation updateEquipmentLocation(EquipmentLocation location) throws NoSuchEquipmentException {
        EquipmentLocation locationToUpdate;
        try {
            locationToUpdate = client.getEquipmentLocation(location.getId());
        } catch (FeignException ex) {
            throw new NoSuchEquipmentException("There is no equipment with id " + location.getId());
        }
        locationToUpdate.setLocation(location.getLocation());
        return client.updateEquipmentLocation(locationToUpdate.getId(), locationToUpdate);
    }


    public List<EquipmentLocation> getLocationByDescription(String description) {
        return client.getEquipmentByDescription(description);
    }
}
