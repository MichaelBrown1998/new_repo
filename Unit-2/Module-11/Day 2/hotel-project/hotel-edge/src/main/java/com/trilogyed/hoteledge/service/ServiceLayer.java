package com.trilogyed.hoteledge.service;

import com.trilogyed.hoteledge.exception.NoVacancyException;
import com.trilogyed.hoteledge.model.Room;
import com.trilogyed.hoteledge.util.feign.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServiceLayer {
    RoomService roomService;

    @Autowired
    public ServiceLayer(RoomService roomService) {
        this.roomService = roomService;
    }

    public List<Room> getVacantRoomsFromAPI() throws NoVacancyException {
        List<Room> returnVal = roomService.getAllRooms()
                .stream()
                .filter(room -> room.getOccupant().equals(""))
                .collect(Collectors.toList());

//        if (returnVal.size() == 0) {
//            throw new NoVacancyException();
//        }

        return returnVal;
    }
}
