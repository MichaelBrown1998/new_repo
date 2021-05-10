package com.trilogyed.hotelbookingservice.domain;

import java.util.Objects;

public class RoomRateAndRewards {
    private Integer roomNumber;
    private String roomType;
    private Boolean rewardsMember;
    private Boolean doubleBonusDay;
    private Float baseRate;
    private Float memberDiscount;
    private Integer baseRewardsPoints;
    private Boolean canDouble;
    private Float finalCost;
    private Integer totalRewardsPoints;

    public RoomRateAndRewards() {}

    public RoomRateAndRewards(RoomRateAndRewards toCopy) {
        this.roomNumber = toCopy.roomNumber;
        this.roomType = toCopy.roomType;
        this.rewardsMember = toCopy.rewardsMember;
        this.doubleBonusDay = toCopy.doubleBonusDay;
        this.baseRate = toCopy.baseRate;
        this.memberDiscount = toCopy.memberDiscount;
        this.baseRewardsPoints = toCopy.baseRewardsPoints;
        this.canDouble = toCopy.canDouble;
        this.finalCost = toCopy.finalCost;
        this.totalRewardsPoints = toCopy.totalRewardsPoints;
    }

    public Integer getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(Integer roomNumber) {
        this.roomNumber = roomNumber;
    }

    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }

    public Boolean getRewardsMember() {
        return rewardsMember;
    }

    public void setRewardsMember(Boolean rewardsMember) {
        this.rewardsMember = rewardsMember;
    }

    public Boolean getDoubleBonusDay() {
        return doubleBonusDay;
    }

    public void setDoubleBonusDay(Boolean doubleBonusDay) {
        this.doubleBonusDay = doubleBonusDay;
    }

    public Float getBaseRate() {
        return baseRate;
    }

    public void setBaseRate(Float baseRate) {
        this.baseRate = baseRate;
    }

    public Float getMemberDiscount() {
        return memberDiscount;
    }

    public void setMemberDiscount(Float memberDiscount) {
        this.memberDiscount = memberDiscount;
    }

    public Integer getBaseRewardsPoints() {
        return baseRewardsPoints;
    }

    public void setBaseRewardsPoints(Integer baseRewardsPoints) {
        this.baseRewardsPoints = baseRewardsPoints;
    }

    public Boolean getCanDouble() {
        return canDouble;
    }

    public void setCanDouble(Boolean canDouble) {
        this.canDouble = canDouble;
    }

    public Float getFinalCost() {
        return finalCost;
    }

    public void setFinalCost(Float finalCost) {
        this.finalCost = finalCost;
    }

    public Integer getTotalRewardsPoints() {
        return totalRewardsPoints;
    }

    public void setTotalRewardsPoints(Integer totalRewardsPoints) {
        this.totalRewardsPoints = totalRewardsPoints;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RoomRateAndRewards that = (RoomRateAndRewards) o;
        return Objects.equals(roomNumber, that.roomNumber) &&
                Objects.equals(roomType, that.roomType) &&
                Objects.equals(rewardsMember, that.rewardsMember) &&
                Objects.equals(doubleBonusDay, that.doubleBonusDay) &&
                Objects.equals(baseRate, that.baseRate) &&
                Objects.equals(memberDiscount, that.memberDiscount) &&
                Objects.equals(baseRewardsPoints, that.baseRewardsPoints) &&
                Objects.equals(canDouble, that.canDouble) &&
                Objects.equals(finalCost, that.finalCost) &&
                Objects.equals(totalRewardsPoints, that.totalRewardsPoints);
    }

    @Override
    public int hashCode() {
        return Objects.hash(roomNumber, roomType, rewardsMember, doubleBonusDay, baseRate, memberDiscount, baseRewardsPoints, canDouble, finalCost, totalRewardsPoints);
    }
}
