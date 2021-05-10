package com.trilogyed.hospital.service;

import com.trilogyed.hospital.domain.EquipmentLocation;
import com.trilogyed.hospital.exception.NoSuchEquipmentException;
import com.trilogyed.hospital.util.feign.EquipmentLocationClient;
import feign.FeignException;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static junit.framework.TestCase.assertEquals;
import static org.junit.Assert.fail;
import static org.mockito.Mockito.*;

public class ServiceLayerTest {

    private static final int ID_THAT_EXISTS = 1;
    private static final int ID_THAT_DOES_NOT_EXIST = 101;
    private static final String DESCRIPTION_THAT_EXISTS = "wheelchair";
    private static final String DESCRIPTION_THAT_DOES_NOT_EXIST = "robot doctor";
    private static final EquipmentLocation EQUIPMENT_LOCATION_1 = new EquipmentLocation(1, DESCRIPTION_THAT_EXISTS, "room 111");
    private static final EquipmentLocation EQUIPMENT_LOCATION_2 = new EquipmentLocation(2, DESCRIPTION_THAT_EXISTS, "room 222");
    private static final EquipmentLocation EQUIPMENT_WITH_INVALID_ID = new EquipmentLocation(ID_THAT_DOES_NOT_EXIST, "bloodletter", "dungeon");

    private ServiceLayer service;
    private EquipmentLocationClient client;

    @Before
    public void setUp() throws Exception {
        setUpFeignClientMock();
        service = new ServiceLayer(client);
    }

    private void setUpFeignClientMock() {
        client = mock(EquipmentLocationClient.class);

        doReturn(EQUIPMENT_LOCATION_1).when(client).getEquipmentLocation(ID_THAT_EXISTS);
        doThrow(new FeignException.NotFound("Status 404", null)).when(client).getEquipmentLocation(ID_THAT_DOES_NOT_EXIST);
        doReturn(EQUIPMENT_LOCATION_1).when(client).updateEquipmentLocation(ID_THAT_EXISTS, EQUIPMENT_LOCATION_1);

        List<EquipmentLocation> returnList = new ArrayList<>();
        returnList.add(EQUIPMENT_LOCATION_1);
        returnList.add(EQUIPMENT_LOCATION_2);
        doReturn(returnList).when(client).getEquipmentByDescription(DESCRIPTION_THAT_EXISTS);

        doReturn(new ArrayList()).when(client).getEquipmentByDescription(DESCRIPTION_THAT_DOES_NOT_EXIST);
    }

    @Test
    public void shouldUpdateEquipmentLocation() {

        //arrange (all the setup above)
        //act
       EquipmentLocation whatWeGot = service.updateEquipmentLocation(EQUIPMENT_LOCATION_1);

       //assert
       assertEquals(whatWeGot, EQUIPMENT_LOCATION_1);
    }

    @Test(expected = NoSuchEquipmentException.class)
    public void shouldThrowExceptionWhenUpdateEquipmentLocationWithBadId() {
      
        //arrange (all the setup above)
        //act
        EquipmentLocation whatWeGot = service.updateEquipmentLocation(EQUIPMENT_WITH_INVALID_ID);
        fail("Should have thrown an exception");
    }

    @Test
    public void shouldGetLocationByDescription() {

        //arrange (all the setup above)
        //act
        List<EquipmentLocation> whatIGot = service.getLocationByDescription(DESCRIPTION_THAT_EXISTS);
        //assert
        assertEquals(2, whatIGot.size());
    }

    @Test
    public void shouldReturnEmptyListWhenGetLocationByDescriptionReturnsNoData() {

        //arrange (all the setup above)
        //act
        List<EquipmentLocation> whatIGot = service.getLocationByDescription(DESCRIPTION_THAT_DOES_NOT_EXIST);
        //assert
        assertEquals(0, whatIGot.size());
    }
}