package com.trilogyed.hoteledge.service;

import com.trilogyed.hoteledge.exception.NoVacancyException;
import com.trilogyed.hoteledge.model.Room;
import com.trilogyed.hoteledge.util.feign.RoomService;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.mock;

public class ServiceLayerTest {

    private ServiceLayer serviceLayer;

    private RoomService roomService;

    @Before
    public void setup() {
        setupRoomServiceMock();
        serviceLayer = new ServiceLayer(roomService);
    }

    public void setupRoomServiceMock() {
        roomService = mock(RoomService.class);

        List<Room> roomList = new ArrayList<>();
        Room room = new Room();
        room.setNumber(100);
        room.setOccupant("");
        room.setId(1);

        Room room2 = new Room();
        room2.setNumber(101);
        room2.setOccupant("");
        room2.setId(2);

        Room room3 = new Room();
        room3.setNumber(201);
        room3.setOccupant("Adam");
        room3.setId(3);

        roomList.add(room);
        roomList.add(room2);
        roomList.add(room3);

        doReturn(roomList).when(roomService).getAllRooms();
    }

    public void redoMockOfServiceLayerSoThatThereAreNoVacantRooms() {
        List<Room> roomList = new ArrayList<>();
        Room room = new Room();
        room.setNumber(100);
        room.setOccupant("Dan");
        room.setId(1);

        Room room2 = new Room();
        room2.setNumber(101);
        room2.setOccupant("Manny");
        room2.setId(2);

        Room room3 = new Room();
        room3.setNumber(201);
        room3.setOccupant("Adam");
        room3.setId(3);

        roomList.add(room);
        roomList.add(room2);
        roomList.add(room3);

        doReturn(roomList).when(roomService).getAllRooms();
    }


    @Test
    public void shouldRetrieveListOfVacantRooms() {
        // Arrange
        List<Room> roomList = new ArrayList<>();
        Room room = new Room();
        room.setNumber(100);
        room.setOccupant("");
        room.setId(1);

        Room room2 = new Room();
        room2.setNumber(101);
        room2.setOccupant("");
        room2.setId(2);

        roomList.add(room);
        roomList.add(room2);

        // Act
        List<Room> whatIGotFromTheMethod = null;
        try {
            whatIGotFromTheMethod = serviceLayer.getVacantRoomsFromAPI();
        } catch (NoVacancyException nve) {
            fail("Threw an exception, but should not have. " + nve);
        }

        // Assert
        assertEquals(roomList, whatIGotFromTheMethod);
    }

    @Test(expected = NoVacancyException.class)
    public void shouldThrowExceptionWhenThereAreNoVacancies() throws NoVacancyException {
        // Arrange
        redoMockOfServiceLayerSoThatThereAreNoVacantRooms();

        // Act
        List<Room> whatIGotFromTheMethod = serviceLayer.getVacantRoomsFromAPI();

        // Assert
        fail("The test failed. An exception should have been thrown.");
    }

}