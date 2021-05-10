package com.trilogyed.glossary.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.trilogyed.glossary.domain.Definition;
import com.trilogyed.glossary.exception.NotAllowedDefinition;
import com.trilogyed.glossary.service.ServiceLayer;
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
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(GlossaryController.class)
public class GlossaryControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ServiceLayer serviceLayer;

    private static final String TERM_1_CONTAINS_DEFINITIONS = "yoink";
    private static final Definition TERM_1_DEFINITION_1 = new Definition(1, TERM_1_CONTAINS_DEFINITIONS, "noise made when stealing");
    private static final Definition TERM_1_DEFINITION_2 = new Definition(2, TERM_1_CONTAINS_DEFINITIONS, "I hath taken it from thoust handeth.");
    private static final String TERM_2_HAS_NO_DEFINITIONS = "radical";
    private List<Definition> TERM_1_DEFINITION_LIST = new ArrayList<>();
    private ObjectMapper mapper = new ObjectMapper();
    private static final String DEFINITION_TO_SAVE_TERM = "literally";
    private static final String DEFINITION_TO_SAVE_DEFINITION = "figuratively";
    private static final Definition DEFINITION_TO_SAVE = new Definition(DEFINITION_TO_SAVE_TERM, DEFINITION_TO_SAVE_DEFINITION);
    private static final Definition SAVED_DEFINITION = new Definition(5, DEFINITION_TO_SAVE_TERM, DEFINITION_TO_SAVE_DEFINITION);
    private static final Definition FORBIDDEN_DEFINITION_TO_SAVE = new Definition("rule breaker", "A forbidden word is jerk.");

    @Before
    public void setUp() {
        TERM_1_DEFINITION_LIST.add(TERM_1_DEFINITION_1);
        TERM_1_DEFINITION_LIST.add(TERM_1_DEFINITION_2);

        when(serviceLayer.getAllDefinitions(TERM_1_CONTAINS_DEFINITIONS)).thenReturn(TERM_1_DEFINITION_LIST);
        when(serviceLayer.addDefinition(DEFINITION_TO_SAVE)).thenReturn(SAVED_DEFINITION);
        when(serviceLayer.addDefinition(FORBIDDEN_DEFINITION_TO_SAVE)).thenThrow(new NotAllowedDefinition());
    }

    @Test
    public void testGetEquipmentByLocationHappyPath() throws Exception {

        String expectedJsonOutput = mapper.writeValueAsString(TERM_1_DEFINITION_LIST);

        this.mockMvc.perform(get("/glossary/term/{term}",TERM_1_CONTAINS_DEFINITIONS))
                .andDo(print()).andExpect(status().isOk())
                .andExpect(content().json(expectedJsonOutput));
    }

    @Test
    public void testGetEquipmentByLocationWhenNoDefinitions() throws Exception {

        String expectedJsonOutput = mapper.writeValueAsString(new ArrayList());

        this.mockMvc.perform(get("/glossary/term/{term}",TERM_2_HAS_NO_DEFINITIONS))
                .andDo(print()).andExpect(status().isOk())
                .andExpect(content().json(expectedJsonOutput));
    }

    @Test
    public void testAddAllowedDefinition() throws Exception {
        String expectedJsonOutput = mapper.writeValueAsString(SAVED_DEFINITION);

        mockMvc.perform(MockMvcRequestBuilders
            .post("/glossary")
            .content(mapper.writeValueAsString(DEFINITION_TO_SAVE))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())
                .andExpect(content().json(expectedJsonOutput));
    }

    @Test
    public void testAddForbiddenDefinition() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                .post("/glossary")
                .content(mapper.writeValueAsString(FORBIDDEN_DEFINITION_TO_SAVE))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isUnprocessableEntity())
                .andExpect(content().string(containsString(" may not be used")));
    }
}