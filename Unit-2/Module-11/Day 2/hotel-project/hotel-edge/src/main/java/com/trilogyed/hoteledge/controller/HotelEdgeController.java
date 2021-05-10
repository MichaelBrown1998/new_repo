package com.trilogyed.hoteledge.controller;

import com.trilogyed.hoteledge.exception.NoVacancyException;
import com.trilogyed.hoteledge.model.Room;
import com.trilogyed.hoteledge.service.ServiceLayer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class HotelEdgeController {

    @Autowired
    ServiceLayer service;

    @RequestMapping(value="/hotel/vacancies", method= RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public List<Room> getVacantRooms() throws NoVacancyException {
        List<Room> vacantRooms = service.getVacantRoomsFromAPI();
        if (vacantRooms.size() == 0) {
            throw new NoVacancyException();
        }
        return vacantRooms;
    }
}
