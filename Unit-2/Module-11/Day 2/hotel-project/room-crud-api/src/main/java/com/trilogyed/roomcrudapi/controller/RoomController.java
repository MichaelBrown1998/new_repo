package com.trilogyed.roomcrudapi.controller;

import com.trilogyed.roomcrudapi.dto.Room;
import com.trilogyed.roomcrudapi.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RoomController {
    @Autowired
    RoomRepository repo;

    @RequestMapping(value="/room", method= RequestMethod.POST)
    public Room addRoom(@RequestBody Room room) {
        return repo.save(room);
    }

    @RequestMapping(value="/room", method=RequestMethod.GET)
    public List<Room> getAllRooms() {
        return repo.findAll();
    }

    @RequestMapping(value="/room/{id}", method=RequestMethod.PUT)
    public void updateRoom(@PathVariable int id, @RequestBody Room room) {
        room.setId(id);
        repo.save(room);
    }
}
