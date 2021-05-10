package com.trilogyed.glossary.service;

import com.trilogyed.glossary.domain.Definition;
import com.trilogyed.glossary.exception.NotAllowedDefinition;
import com.trilogyed.glossary.util.feign.DefinitionClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceLayer {
    private static final String[] FORBIDDEN_WORDS =  {"darn", "drat", "heck", "jerk", "butt"};

    private DefinitionClient client;

    @Autowired
    ServiceLayer(DefinitionClient client) { this.client = client; }

    public List<Definition> getAllDefinitions(String term) {
        return client.getDefinitionsForTerm(term);
    }

    public Definition addDefinition(Definition definition) throws NotAllowedDefinition {
        if (checkIfDefinitionIsClean(definition.getDefinition())) {
            return client.addDefinition(definition);
        } else {
            throw new NotAllowedDefinition();
        }
    }

    public boolean checkIfDefinitionIsClean(String toCheck) {
        for (String word : FORBIDDEN_WORDS) {
            // the pattern represented by the string .*\\b
            // . is ANY CHARACTER
            // * is ZERO OR MORE OF THE PREVIOUS CHARACTER
            // \\b is a word boundary (like a space, a tab, or punctuation)
            if (toCheck.toLowerCase().matches(".*\\b" + word.toLowerCase() + "\\b.*")) {
                return false;
            }
        }
        return true;
    }

}
