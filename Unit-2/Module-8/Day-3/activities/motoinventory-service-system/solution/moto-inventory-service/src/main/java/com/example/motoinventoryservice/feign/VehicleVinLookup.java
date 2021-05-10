package com.example.motoinventoryservice.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@FeignClient(name="vin-lookup")
public interface VehicleVinLookup {
    @RequestMapping("/vehicle/{vin}")
    Map<String, String> findVehicleByVin(@PathVariable String vin);
}
