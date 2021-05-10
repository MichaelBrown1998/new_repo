package com.trilogyed.glossary.controller;

import com.trilogyed.glossary.domain.Definition;
import com.trilogyed.glossary.service.ServiceLayer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GlossaryController {

    @Autowired
    ServiceLayer serviceLayer;

    @RequestMapping(value="/glossary/term/{term}", method= RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public List<Definition> getAllDefinitionsOfATerm(@PathVariable String term) {
        return serviceLayer.getAllDefinitions(term);
    }

    @RequestMapping(value = "/glossary", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.CREATED)
    public Definition addNewDefinition(@RequestBody Definition definition) {
        return serviceLayer.addDefinition(definition);
    }
}

/*
The edge microservice must provide an endpoint that allows users to search for all definitions of a given word or phrase.
The edge microservice must provide an endpoint that allows users to add a new word/definition tuple.
The edge microservice must enforce the following business rules in the service layer:
The definition must be family friendly. It cannot contain any of the following words (case insensitive), however these words may exist within other words
darn
drat (however, dehydrated is allowed, for example)
heck (however, heckler and checkmate are allowed, for example)
jerk
butt (however, buttress is allowed, for example)

 */
