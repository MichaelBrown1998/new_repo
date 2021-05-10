package com.trilogyed.hotelbookingservice.service;

import com.trilogyed.hotelbookingservice.domain.Rewards;
import com.trilogyed.hotelbookingservice.domain.Room;
import com.trilogyed.hotelbookingservice.domain.RoomRateAndRewards;
import com.trilogyed.hotelbookingservice.util.feign.RewardsService;
import com.trilogyed.hotelbookingservice.util.feign.RoomService;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.mock;

public class ServiceLayerTest {

    private ServiceLayer service;
    private RoomService roomService;
    private RewardsService rewardsService;

    private static final Integer ROOM_NUMBER = new Integer(1234);
    private static final String ROOM_TYPE = "deluxe";
    private static final Float DEFAULT_BASE_RATE = new Float(300);
    private static final Integer DEFAULT_BASE_REWARDS_POINTS = new Integer(250);
    private static final Boolean DEFAULT_CAN_DOUBLE = Boolean.TRUE;
    private static final Float DEFAULT_MEMBER_DISCOUNT = new Float(0.25);
    @Before
    public void setUp() throws Exception {
        setUpRoomServiceMock();
        setUpRewardsServiceMock();
        service = new ServiceLayer(roomService, rewardsService);
    }

    private void setUpRoomServiceMock() {
        roomService = mock(RoomService.class);
        Room room = new Room();
        room.setNumber(ROOM_NUMBER);
        room.setBaseRate(DEFAULT_BASE_RATE);
        room.setRoomType(ROOM_TYPE);
        doReturn(room).when(roomService).getRoom(ROOM_NUMBER);
    }

    private void setUpRewardsServiceMock() {
        rewardsService = mock(RewardsService.class);
        Rewards rewards = new Rewards();
        rewards.setCanDouble(DEFAULT_CAN_DOUBLE);
        rewards.setDiscount(DEFAULT_MEMBER_DISCOUNT);
        rewards.setId(10);
        rewards.setPoints(DEFAULT_BASE_REWARDS_POINTS);
        rewards.setRoomType(ROOM_TYPE);
        doReturn(rewards).when(rewardsService).getRewardsInformationForRoomType(ROOM_TYPE);
    }

    @Test
    public void shouldProperlyPopulateOutputWhenHappyPath() {
        // arrange
        boolean doubleBonusDay = false;
        boolean isRewardsMember = false;
        RoomRateAndRewards whatWeExpect = new RoomRateAndRewards();
        whatWeExpect.setDoubleBonusDay(doubleBonusDay);
        whatWeExpect.setTotalRewardsPoints(0);
        whatWeExpect.setRewardsMember(isRewardsMember);
        whatWeExpect.setBaseRate(DEFAULT_BASE_RATE);
        whatWeExpect.setBaseRewardsPoints(DEFAULT_BASE_REWARDS_POINTS);
        whatWeExpect.setCanDouble(DEFAULT_CAN_DOUBLE);
        whatWeExpect.setFinalCost(DEFAULT_BASE_RATE);
        whatWeExpect.setMemberDiscount(DEFAULT_MEMBER_DISCOUNT);
        whatWeExpect.setRoomNumber(ROOM_NUMBER);
        whatWeExpect.setRoomType(ROOM_TYPE);

        // act
        RoomRateAndRewards whatWeGot = service.gatherRoomRateAndRewards(ROOM_NUMBER, isRewardsMember, doubleBonusDay);

        //assert
        assertEquals(whatWeExpect, whatWeGot);
    }

    @Test
    public void shouldGiveMemberDiscountWhenIsRewardsMemberIsTrue() {
        Float baseRate = 150f;
        Float discountRate = 0.25f;

        Float whatWeGot = service.calculateFinalCost(true, baseRate, discountRate);
        assertEquals((float) baseRate * (1 - discountRate), (float) whatWeGot, 0.00001);
    }

    @Test
    public void shouldNotGiveMemberDiscountWhenRewardsMemberIsFalse() {
        Float baseRate = 150f;
        Float discountRate = 0.25f;

        Float whatWeGot = service.calculateFinalCost(false, baseRate, discountRate);
        assertEquals(baseRate, whatWeGot);
     }

    @Test
    public void shouldGiveZeroPointsWhenRewardsMemberIsFalse() {
        Integer whatWeGot = service.calculateRewardsPoints(false, 100, true, false);
        assertEquals(new Integer(0), whatWeGot);
    }

    @Test
    public void shouldGiveSinglePointsWhenCanDoubleIsFalse() {
        Integer basePoints = 1000;

        Integer whatWeGot = service.calculateRewardsPoints(true, basePoints, false, true);
        assertEquals(basePoints, whatWeGot);
    }

    @Test
    public void shouldGiveSinglePointsWhenIsNotDoubleBonusDay() {
        Integer basePoints = 1111;

        Integer whatWeGot = service.calculateRewardsPoints(true, basePoints, true, false);

        assertEquals(basePoints, whatWeGot);
    }

    @Test
    public void shouldGiveDoublePointsWhenCanDoubleAndIsDoubleBonusDay() {
        Integer basePoints = 123;

        Integer whatWeGot = service.calculateRewardsPoints(true, basePoints, true, true);

        assertEquals((Integer) (basePoints * 2), whatWeGot);

    }
}
