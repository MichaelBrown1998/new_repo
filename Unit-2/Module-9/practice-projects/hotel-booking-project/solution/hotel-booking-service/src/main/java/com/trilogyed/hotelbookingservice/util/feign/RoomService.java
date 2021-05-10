package com.trilogyed.hotelbookingservice.util.feign;

import com.trilogyed.hotelbookingservice.domain.Room;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(name = "room-service")
public interface RoomService {
    @RequestMapping(value = "/room/{number}", method = RequestMethod.GET)
    Room getRoom(@PathVariable int number);
}
