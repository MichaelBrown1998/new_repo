package com.trilogyed.hotelbookingservice.controller;

import com.trilogyed.hotelbookingservice.domain.RoomRateAndRewards;
import com.trilogyed.hotelbookingservice.service.ServiceLayer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class HotelBookingController {
    @Autowired
    ServiceLayer service;

    @RequestMapping(value="/hotelRewards/{roomNumber}", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public RoomRateAndRewards findRoomRateAndRewards(@PathVariable int roomNumber,
                                                     @RequestParam(name="rewardsMember", required = false, defaultValue = "false") Boolean isRewardsMember,
                                                     @RequestParam(name="doubleBonusDay", required = false, defaultValue = "false") Boolean isDoubleBonusDay) {
        return service.gatherRoomRateAndRewards(roomNumber, isRewardsMember, isDoubleBonusDay);
    }
}
