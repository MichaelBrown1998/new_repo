package com.trilogyed.equipmentlocation.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.trilogyed.equipmentlocation.dao.EquipmentLocationRepository;
import com.trilogyed.equipmentlocation.dto.EquipmentLocation;
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
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.hamcrest.Matchers.containsString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@WebMvcTest(EquipmentLocationController.class)
public class EquipmentLocationControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private EquipmentLocationRepository repo;

    public static final EquipmentLocation LOCATION_TO_SAVE_1 = new EquipmentLocation("blood test cart", "room 1122");
    public static final EquipmentLocation SAVED_LOCATION_1 = new EquipmentLocation(1, "blood test cart", "room 1122");
    public static final String SAVED_LOCATION_2_DESCRIPTION = "maternity cart";
    public static final String DESCRIPTION_WITH_NO_RESULTS = "instant cold cure";
    public static final EquipmentLocation SAVED_LOCATION_2 = new EquipmentLocation(2, SAVED_LOCATION_2_DESCRIPTION, "room 3344");
    public static final int GOOD_LOCATION_ID = 1;
    public static final int BAD_LOCATION_ID = 6;

    private ObjectMapper mapper = new ObjectMapper();

    @Before
    public void setUp() {
        when(repo.save(LOCATION_TO_SAVE_1)).thenReturn(SAVED_LOCATION_1);
        when(repo.save(SAVED_LOCATION_1)).thenReturn(SAVED_LOCATION_1);
        when(repo.findById(GOOD_LOCATION_ID)).thenReturn(Optional.of(SAVED_LOCATION_1));
        when(repo.findById(BAD_LOCATION_ID)).thenReturn(Optional.empty());

        List<EquipmentLocation> equipmentLocationList = new ArrayList<>();
        equipmentLocationList.add(SAVED_LOCATION_1);
        equipmentLocationList.add(SAVED_LOCATION_2);
        when(repo.findAll()).thenReturn(equipmentLocationList);

        List<EquipmentLocation> listThatMatchesDescriptionOf2 = new ArrayList<>();
        listThatMatchesDescriptionOf2.add(SAVED_LOCATION_2);
        when(repo.findByDescription(SAVED_LOCATION_2_DESCRIPTION)).thenReturn(listThatMatchesDescriptionOf2);

        when(repo.findByDescription(DESCRIPTION_WITH_NO_RESULTS)).thenReturn(new ArrayList<EquipmentLocation>());
    }

    @Test
    public void shouldCreateEquipmentLocation() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders
        .post("/equipmentLocation")
        .content(mapper.writeValueAsString(LOCATION_TO_SAVE_1))
        .contentType(MediaType.APPLICATION_JSON)
        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").exists());
    }

    @Test
    public void shouldGetLocationByIdWhenLocationExists() throws Exception {

        String outputJson = mapper.writeValueAsString(SAVED_LOCATION_1);
        mockMvc
                .perform(get("/equipmentLocation/{id}", GOOD_LOCATION_ID))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().json(
                        outputJson
                ));
    }

    @Test
    public void shouldReturnNotFoundWhenGetLocationByIdWhereLocationDoesNotExist() throws Exception {
      
        String outputJson = mapper.writeValueAsString(SAVED_LOCATION_1);
        mockMvc
                .perform(get("/equipmentLocation/{id}", BAD_LOCATION_ID))
                .andDo(print())
                .andExpect(status().isNotFound())
                .andExpect(content().string(containsString("Invalid id")));
    }

    @Test
    public void shouldUpdateEquipment() throws Exception {

        this.mockMvc.perform(MockMvcRequestBuilders
                .put("/equipmentLocation/{id}", SAVED_LOCATION_1.getId())
                .content(mapper.writeValueAsString(SAVED_LOCATION_1))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value("" + SAVED_LOCATION_1.getId()))
                .andExpect(jsonPath("$.description").value(SAVED_LOCATION_1.getDescription()))
                .andExpect(jsonPath("$.location").value(SAVED_LOCATION_1.getLocation()));
    }

    @Test
    public void shouldReturnNotFoundWhenUpdateEquipmentWithNonExistentId() throws Exception {

        this.mockMvc.perform(MockMvcRequestBuilders
                .put("/equipmentLocation/{id}", BAD_LOCATION_ID)
                .content(mapper.writeValueAsString(SAVED_LOCATION_1))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                    .andExpect(status().isNotFound())
                    .andExpect(content().string(containsString("Invalid id:")));
    }

    @Test
    public void shouldGetAllLocations() throws Exception {

        List<EquipmentLocation> equipmentLocationList = new ArrayList<>();
        equipmentLocationList.add(SAVED_LOCATION_1);
        equipmentLocationList.add(SAVED_LOCATION_2);
        String jsonOutput = mapper.writeValueAsString(equipmentLocationList);

        mockMvc
                .perform(get("/equipmentLocation"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().json(
                        jsonOutput
                ));
    }

    @Test
    public void shouldReturnEmptyListWhenGetAllLocationsWithNoResults() throws Exception {
  
        // arrange
        when(repo.findAll()).thenReturn(new ArrayList<EquipmentLocation>());

        List<EquipmentLocation> equipmentLocationList = new ArrayList<>();
        String jsonOutput = mapper.writeValueAsString(equipmentLocationList);

        // act and assert
        mockMvc
                .perform(get("/equipmentLocation"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().json(
                        jsonOutput
                ));
    }

    // WHY TEST THIS!??! Even though JPA's delete by ID is void, we can still test that we get the correct
    // Result code (NO CONTENT)
    @Test
    public void shouldReturnNoContentWhenDeleteEquipmentLocation() throws Exception {

        mockMvc
                .perform(MockMvcRequestBuilders.delete("/equipmentLocation/{id}", GOOD_LOCATION_ID))
                .andDo(print())
                .andExpect(status().isNoContent());
    }

    @Test
    public void shouldGetEquipmentLocationByDescription() throws Exception {

        List<EquipmentLocation> equipmentLocationList = new ArrayList<>();
        equipmentLocationList.add(SAVED_LOCATION_2);
        String jsonOutput = mapper.writeValueAsString(equipmentLocationList);

        mockMvc
                .perform(get("/equipmentLocation/description/{description}",SAVED_LOCATION_2_DESCRIPTION))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().json(
                        jsonOutput
                ));
    }

    @Test
    public void shouldReturnEmptyListWhenGetEquipmentLocationByDescriptionAndThereAreNoResults() throws Exception {

        List<EquipmentLocation> equipmentLocationList = new ArrayList<>();
        String jsonOutput = mapper.writeValueAsString(equipmentLocationList);

        mockMvc
                .perform(get("/equipmentLocation/description/{description}",DESCRIPTION_WITH_NO_RESULTS))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().json(
                        jsonOutput
                ));
    }

}