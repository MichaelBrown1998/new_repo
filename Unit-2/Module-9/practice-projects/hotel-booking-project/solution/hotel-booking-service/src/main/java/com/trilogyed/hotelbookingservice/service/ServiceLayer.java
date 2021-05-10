package com.trilogyed.hotelbookingservice.service;

import com.trilogyed.hotelbookingservice.domain.Rewards;
import com.trilogyed.hotelbookingservice.domain.Room;
import com.trilogyed.hotelbookingservice.domain.RoomRateAndRewards;
import com.trilogyed.hotelbookingservice.exception.NoSuchRoomException;
import com.trilogyed.hotelbookingservice.util.feign.RewardsService;
import com.trilogyed.hotelbookingservice.util.feign.RoomService;
import feign.FeignException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceLayer {

    RoomService roomService;
    RewardsService rewardsService;

    @Autowired
    public ServiceLayer(RoomService roomService, RewardsService rewardsService) {
        this.roomService = roomService;
        this.rewardsService = rewardsService;
    }

    public RoomRateAndRewards gatherRoomRateAndRewards(int roomNumber, Boolean isRewardsMember, Boolean isDoubleBonusDay) throws NoSuchRoomException {
        RoomRateAndRewards returnVal = new RoomRateAndRewards();
        Room room;
        returnVal.setRewardsMember(isRewardsMember);
        returnVal.setDoubleBonusDay(isDoubleBonusDay);
        try {
            room = roomService.getRoom(roomNumber);
        } catch(FeignException.NotFound fe) {
            System.out.println("When trying for room " + roomNumber + ", got FeignException.NotFound: " + fe.getMessage());
            throw new NoSuchRoomException(roomNumber);
        }

        returnVal.setRoomNumber(room.getNumber());
        returnVal.setBaseRate(room.getBaseRate());
        returnVal.setRoomType(room.getRoomType());

        Rewards rewards = rewardsService.getRewardsInformationForRoomType(room.getRoomType());
        returnVal.setCanDouble(rewards.getCanDouble());
        returnVal.setMemberDiscount(rewards.getDiscount());

        returnVal.setBaseRewardsPoints(rewards.getPoints());

        returnVal.setDoubleBonusDay(isDoubleBonusDay);
        returnVal.setTotalRewardsPoints(0);

        returnVal.setFinalCost(calculateFinalCost(isRewardsMember, room.getBaseRate(), rewards.getDiscount()));
        returnVal.setTotalRewardsPoints(calculateRewardsPoints(isRewardsMember, rewards.getPoints(), rewards.getCanDouble(), isDoubleBonusDay));

        return returnVal;
    }

    public Float calculateFinalCost(Boolean isRewardsMember, Float baseRate, Float memberDiscount) {
        float returnVal = baseRate;
        if (isRewardsMember) {
            returnVal = returnVal * (1.0f - memberDiscount);
        }
        return returnVal;
    }

    public Integer calculateRewardsPoints(boolean isRewardsMember, int basePoints, boolean canDouble, boolean isDoubleBonusDay) {
        int returnVal = 0;
        if (isRewardsMember == true) {
            if (isDoubleBonusDay && canDouble) {
                returnVal = basePoints * 2;
            } else {
                returnVal = basePoints;
            }
        }
        return returnVal;
    }
}
