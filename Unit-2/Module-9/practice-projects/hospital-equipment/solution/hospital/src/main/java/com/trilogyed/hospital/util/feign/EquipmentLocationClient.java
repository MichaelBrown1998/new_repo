package com.trilogyed.hospital.util.feign;

import com.trilogyed.hospital.domain.EquipmentLocation;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@FeignClient(name = "equipment-location")
public interface EquipmentLocationClient {

    @RequestMapping(value="/equipmentLocation/{id}", method=RequestMethod.GET)
    EquipmentLocation getEquipmentLocation(@PathVariable int id);

    @RequestMapping(value="/equipmentLocation/{id}", method=RequestMethod.PUT)
    EquipmentLocation updateEquipmentLocation(@PathVariable int id, EquipmentLocation equipmentLocation);

    @RequestMapping(value="/equipmentLocation/description/{description}", method= RequestMethod.GET)
    List<EquipmentLocation> getEquipmentByDescription(@PathVariable String description);

}
