package com.trilogyed.hospital.controller;

import com.trilogyed.hospital.domain.EquipmentLocation;
import com.trilogyed.hospital.service.ServiceLayer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HospitalController {
    @Autowired
    ServiceLayer serviceLayer;

    @RequestMapping(value="/location/{id}", method= RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public EquipmentLocation updateEquipmentLocation(@PathVariable int id, @RequestBody EquipmentLocation location) {
        location.setId(id);
        return serviceLayer.updateEquipmentLocation(location);
    }

    @RequestMapping(value="/location/description/{description}", method=RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public List<EquipmentLocation> getEquipmentByLocation(@PathVariable String description) {
        return serviceLayer.getLocationByDescription(description);
    }

}
