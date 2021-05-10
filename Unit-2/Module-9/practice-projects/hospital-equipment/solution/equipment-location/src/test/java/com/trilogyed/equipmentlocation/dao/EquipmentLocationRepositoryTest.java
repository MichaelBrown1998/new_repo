package com.trilogyed.equipmentlocation.dao;

import com.trilogyed.equipmentlocation.dto.EquipmentLocation;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EquipmentLocationRepositoryTest {

    @Autowired
    EquipmentLocationRepository equipmentLocationRepository;

    @Before
    public void setUp() throws Exception {
        equipmentLocationRepository.deleteAll();
    }

    @Test
    public void shouldCreateARecord() {

        //arrange
        EquipmentLocation location = new EquipmentLocation("wheelchair", "room 100");

        //act
        equipmentLocationRepository.save(location);

        List<EquipmentLocation> equipmentLocationList = equipmentLocationRepository.findAll();

        //assert
        assertEquals(1, equipmentLocationList.size());
    }

    @Test
    public void shouldReturnOnlyMatchesWhenFindByDescription() {

        //arrange
        EquipmentLocation location = new EquipmentLocation("wheelchair", "room 100");
        equipmentLocationRepository.save(location);

        EquipmentLocation location2 = new EquipmentLocation("wheelchair", "room 101");
        equipmentLocationRepository.save(location2);

        EquipmentLocation location3 = new EquipmentLocation("defibrillator", "room 102");
        equipmentLocationRepository.save(location3);

        //act
        List<EquipmentLocation> locationList = equipmentLocationRepository.findByDescription("wheelchair");

        //assert
        assertEquals(2, locationList.size());

    }
}