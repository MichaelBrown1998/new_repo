package com.trilogyed.hospital.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.trilogyed.hospital.domain.EquipmentLocation;
import com.trilogyed.hospital.exception.NoSuchEquipmentException;
import com.trilogyed.hospital.service.ServiceLayer;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.containsString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@WebMvcTest(HospitalController.class)
public class HospitalControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ServiceLayer serviceLayer;

    private static final EquipmentLocation REAL_LOCATION = new EquipmentLocation(2, "heart monitor", "room 315");
    private static final EquipmentLocation NON_EXISTENT_LOCATION = new EquipmentLocation(1, "blood test cart", "room 999");
    private static final String DESCRIPTION_THAT_MATCHES_SOME_EQUIPMENT = "wheelchair";
    private static final String DESCRIPTION_THAT_MATCHES_NO_EQUIPMENT = "leech station";
    private ObjectMapper mapper = new ObjectMapper();

    @Before
    public void setUpMock() {

        when(serviceLayer.updateEquipmentLocation(REAL_LOCATION)).thenReturn(REAL_LOCATION);

        when(serviceLayer.updateEquipmentLocation(NON_EXISTENT_LOCATION)).thenThrow(new NoSuchEquipmentException("There is no equipment with id " + NON_EXISTENT_LOCATION.getId()));

        EquipmentLocation wheelchair1 = new EquipmentLocation(3, DESCRIPTION_THAT_MATCHES_SOME_EQUIPMENT, "room 100");
        EquipmentLocation wheelchair2 = new EquipmentLocation(4, DESCRIPTION_THAT_MATCHES_SOME_EQUIPMENT, "room 101");
        List<EquipmentLocation> wheelchairList = new ArrayList<EquipmentLocation>();
        wheelchairList.add(wheelchair1);
        wheelchairList.add(wheelchair2);
        when(serviceLayer.getLocationByDescription(DESCRIPTION_THAT_MATCHES_SOME_EQUIPMENT)).thenReturn(wheelchairList);

        when(serviceLayer.getLocationByDescription(DESCRIPTION_THAT_MATCHES_NO_EQUIPMENT)).thenReturn(new ArrayList());
    }

    @Test
    public void shouldUpdateEquipmentLocation() throws Exception {


        this.mockMvc.perform(MockMvcRequestBuilders
                .put("/location/{id}", REAL_LOCATION.getId())
                .content(mapper.writeValueAsString(REAL_LOCATION))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value("" + REAL_LOCATION.getId()))
                .andExpect(jsonPath("$.description").value(REAL_LOCATION.getDescription()))
                .andExpect(jsonPath("$.location").value(REAL_LOCATION.getLocation()));
    }

    @Test
    public void shouldReturnNotFoundWhenUpdateEquipmentLocationNonExistentId() throws Exception {

        this.mockMvc.perform(MockMvcRequestBuilders
                .put("/location/{id}", NON_EXISTENT_LOCATION.getId())
                .content(mapper.writeValueAsString(NON_EXISTENT_LOCATION))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound())
                .andExpect(content().string(containsString("There is no equipment with id " + NON_EXISTENT_LOCATION.getId())));
    }

    @Test
    public void shouldGetEquipmentByLocation() throws Exception {

        this.mockMvc.perform(get("/location/description/" + DESCRIPTION_THAT_MATCHES_SOME_EQUIPMENT))
                .andDo(print()).andExpect(status().isOk())
                .andExpect(content().string(containsString("room 100")))
                .andExpect(content().string(containsString("room 101")));
    }

    @Test
    public void shouldReturnOkWithEmptyListWhenGetEquipmentByLocationNoResults() throws Exception {

        this.mockMvc.perform(get("/location/description/" + DESCRIPTION_THAT_MATCHES_NO_EQUIPMENT))
                .andDo(print()).andExpect(status().isOk());
    }

}
