package com.trilogyed.equipmentlocation.controller;

import com.trilogyed.equipmentlocation.InvalidIdException;
import com.trilogyed.equipmentlocation.dao.EquipmentLocationRepository;
import com.trilogyed.equipmentlocation.dto.EquipmentLocation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class EquipmentLocationController {

    @Autowired
    private EquipmentLocationRepository eqLocRepo;

    @RequestMapping(value="/equipmentLocation", method=RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.CREATED)
    public EquipmentLocation createEquipmentLocation(@RequestBody EquipmentLocation equipmentLocation) {
        return eqLocRepo.save(equipmentLocation);
    }

    @RequestMapping(value="/equipmentLocation/{id}", method=RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public EquipmentLocation getEquipmentLocation(@PathVariable int id) {
        Optional<EquipmentLocation> equipmentLocation = eqLocRepo.findById(id);
        if (equipmentLocation.isPresent() == false) {
            throw new InvalidIdException(id);
        }
        return equipmentLocation.get();
    }

    @RequestMapping(value="/equipmentLocation/{id}", method=RequestMethod.PUT)
    @ResponseStatus(value = HttpStatus.OK)
    public EquipmentLocation updateEquipmentLocation(@PathVariable int id, @RequestBody EquipmentLocation location) {
        // Check to see that equipment location exists with id
        EquipmentLocation checkVal = getEquipmentLocation(id);

        location.setId(id);

        return eqLocRepo.save(location);
    }

    @RequestMapping(value="/equipmentLocation", method=RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public List<EquipmentLocation> getAllEquipmentLocations() {
        return eqLocRepo.findAll();
    }

    @RequestMapping(value="/equipmentLocation/{id}", method=RequestMethod.DELETE)
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteEquipmentLocation(@PathVariable int id) {
        eqLocRepo.deleteById(id);
    }

    @RequestMapping(value="/equipmentLocation/description/{description}", method=RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public List<EquipmentLocation> getEquipmentLocationByDescription(@PathVariable String description) {
        return eqLocRepo.findByDescription(description);
    }
}
