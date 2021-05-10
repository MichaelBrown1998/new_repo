package com.trilogyed.hoteledge.util.feign;

import com.trilogyed.hoteledge.model.Room;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@FeignClient(name="room-crud-api")
public interface RoomService {
    @RequestMapping(value="/room", method=RequestMethod.GET)
    public List<Room> getAllRooms();

    @RequestMapping(value="/room/{id}", method=RequestMethod.PUT)
    public void updateRoom(@PathVariable int id, @RequestBody Room room);
}
