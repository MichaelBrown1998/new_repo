package com.trilogyed.hoteledge.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.trilogyed.hoteledge.exception.NoVacancyException;
import com.trilogyed.hoteledge.model.Room;
import com.trilogyed.hoteledge.service.ServiceLayer;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.Mockito.doReturn;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@WebMvcTest(HotelEdgeController.class)
public class HotelEdgeControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ServiceLayer serviceLayer;

    private ObjectMapper mapper = new ObjectMapper();

    @Before
    public void setup() throws NoVacancyException {
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

        doReturn(roomList).when(serviceLayer).getVacantRoomsFromAPI();
    }
    /***
 * The edge microservice must provide an endpoint that allows customers to see the available hotel rooms.
 * These are the rooms that have no occupant. You must design and implement this endpoint.
 *
 * The edge microservice must provide an endpoint that allows a user to update the occupant of a room.
 * A room with an occupant can only be updated to have no occupant.
 */
    @Test
    public void shouldReturnListOfVacantRooms() throws Exception {
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

        String expectedJsonOutput = mapper.writeValueAsString(roomList);

        this.mockMvc.perform(get("/hotel/vacancies"))
                .andDo(print()).andExpect(status().isOk())
                .andExpect(content().json(expectedJsonOutput));
    }

}