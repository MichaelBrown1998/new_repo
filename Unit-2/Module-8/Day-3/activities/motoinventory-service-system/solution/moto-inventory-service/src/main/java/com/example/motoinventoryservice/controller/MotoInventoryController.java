package com.example.motoinventoryservice.controller;

import com.example.motoinventoryservice.dao.MotoInventoryDao;
import com.example.motoinventoryservice.feign.VehicleVinLookup;
import com.example.motoinventoryservice.model.Motorcycle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

@RestController
public class MotoInventoryController {

    VehicleVinLookup vehicleVinLookup;
    MotoInventoryDao dao;

    @Autowired
    public MotoInventoryController(VehicleVinLookup vehicleVinLookup, MotoInventoryDao dao) {
        this.vehicleVinLookup = vehicleVinLookup;
        this.dao = dao;
    }

    @RequestMapping(value = "/vehicle/{vin}", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public Map<String, String> lookupVehicleByVin(@PathVariable String vin) {
        return vehicleVinLookup.findVehicleByVin(vin);
    }

    @RequestMapping(value = "/motorcycles", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.CREATED)
    public Motorcycle createMotorcycle(@RequestBody @Valid Motorcycle motorcycle) {
        return dao.addMotorcycle(motorcycle);
    }

    @RequestMapping(value = "/motorcycles/{motoId}", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public Motorcycle getMotorcycle(@PathVariable int motoId) {
        if (motoId < 1) {
           throw new IllegalArgumentException("MotoId must be greater than 0.");
        }
        Motorcycle returnVal = dao.getMotorcycle(motoId);
        if (returnVal == null) {
            throw new IllegalArgumentException("No motorcycle with id " +motoId);
        }

        return returnVal;
    }

    @RequestMapping(value = "/motorcycles/{motoId}", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMotorcycle(@PathVariable("motoId") int motoId) {
        // do nothing here - in a real application we would delete the entry from
        // the backing data store.
    }

    @RequestMapping(value = "/motorcycles/{motoId}", method=RequestMethod.PUT)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateMotorcycle(@RequestBody @Valid Motorcycle motorcycle, @PathVariable int motoId) {
        // make sure the motoId on the path matches the id of the motorcycle object
        if (motoId != motorcycle.getId()) {
            throw new IllegalArgumentException("Motorcycle ID on path must match the ID in the Motorcycle object.");
        }

        // do nothing here - in a real application we would update the entry in the backing data store

    }
}
