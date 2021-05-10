package com.trilogyed.glossary.service;

import com.trilogyed.glossary.domain.Definition;
import com.trilogyed.glossary.exception.NotAllowedDefinition;
import com.trilogyed.glossary.util.feign.DefinitionClient;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.mock;

public class ServiceLayerTest {

    private ServiceLayer service;
    private DefinitionClient client;

    private static final String CLEAN_TERM = "idk";
    private static final Definition CLEAN_DEFINITION_INPUT = new Definition(CLEAN_TERM, "I don't know.");
    private static final Definition CLEAN_DEFINITION_OUTPUT = new Definition(23, CLEAN_TERM, "I don't know.");
    private static final Definition JERK_DEFINITION = new Definition("meanie", "A jerk.");

    @Before
    public void setUp() throws Exception {
        setUpFeignClientMock();
        service = new ServiceLayer(client);
    }

    private void setUpFeignClientMock() {
        client = mock(DefinitionClient.class);
        doReturn(CLEAN_DEFINITION_OUTPUT).when(client).addDefinition(CLEAN_DEFINITION_INPUT);
        List<Definition> definitions = new ArrayList<>();
        definitions.add(CLEAN_DEFINITION_OUTPUT);
        doReturn(definitions).when(client).getDefinitionsForTerm(CLEAN_TERM);
    }

    @Test
    public void getDefinitionsForATerm() {
        //arrange
        int expectedResultSize = 1;

        //act
        List<Definition> definitions = service.getAllDefinitions(CLEAN_TERM);

        //assert
        assertEquals(expectedResultSize, definitions.size());

    }

    @Test
    public void cleanDefinitionCanBeAdded() {
        // assemble (in setup)
        Definition whatIExpect = CLEAN_DEFINITION_OUTPUT;
        // act
        Definition whatIGot = service.addDefinition(CLEAN_DEFINITION_INPUT);

        // assert
        assertEquals(whatIExpect, whatIGot);
    }

    @Test(expected = NotAllowedDefinition.class)
    public void prohibitedDefinitionIsRejected() {
        // act
        Definition whatIGot = service.addDefinition(JERK_DEFINITION);
        fail("An exception should have been thrown.");
    }

    @Test
    public void checkThatACleanDefinitionPasses() {
        assertEquals(true, service.checkIfDefinitionIsClean("This definition is family friendly."));
    }

    @Test
    public void checkThatForbiddenWordIsRejectedCaseInsensitiveAtBeginning() {
        assertEquals(false, service.checkIfDefinitionIsClean("DArN at the beginning."));
    }
    @Test
    public void checkThatForbiddenWordIsRejectedCaseInsensitiveAtEnd() {
        assertEquals(false, service.checkIfDefinitionIsClean("At the end is JERK"));
    }
    @Test
    public void checkThatForbiddenWordIsRejectedCaseInsensitiveInMiddle() {
        assertEquals(false, service.checkIfDefinitionIsClean("In the middle is butt it's before this."));
    }
    @Test
    public void checkThatForbiddenWordIsNotRejectedWhenItIsPartOfAnotherWord() {
        assertEquals(true, service.checkIfDefinitionIsClean("The word buttresses should be allowed."));
    }
    @Test
    public void checkThatDarnIsRejected() {
        assertEquals(false, service.checkIfDefinitionIsClean("The word darn should be allowed."));
    }
    @Test
    public void checkThatDratIsRejected() {
        assertEquals(false, service.checkIfDefinitionIsClean("Drat is not allowed."));
    }
    @Test
    public void checkThatButtIsRejected() {
        assertEquals(false, service.checkIfDefinitionIsClean("Can't allow the word butt"));
    }

    @Test
    public void checkThatDarnFails() {
        assertEquals(false, service.checkIfDefinitionIsClean("I don't give a darn."));
    }


}