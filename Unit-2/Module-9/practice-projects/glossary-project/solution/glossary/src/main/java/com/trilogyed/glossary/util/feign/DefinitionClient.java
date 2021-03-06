package com.trilogyed.glossary.util.feign;

import com.trilogyed.glossary.domain.Definition;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@FeignClient(name = "definition-service")
public interface DefinitionClient {

    @RequestMapping(value="/definition/term/{term}", method = RequestMethod.GET)
    List<Definition> getDefinitionsForTerm(@PathVariable String term);

    @RequestMapping(value="/definition", method = RequestMethod.POST)
    Definition addDefinition(Definition definition);

}
