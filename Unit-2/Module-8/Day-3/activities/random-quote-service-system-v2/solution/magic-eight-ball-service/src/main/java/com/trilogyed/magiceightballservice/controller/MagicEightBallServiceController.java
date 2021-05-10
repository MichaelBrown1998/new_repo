package com.trilogyed.magiceightballservice.controller;

import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

@RestController
@RefreshScope
public class MagicEightBallServiceController {

    private String[] answers =
            { "No", "Yes", "Looking cloudy", "Not sure", "Absolutely", "Ask again", "Ummm", "Not a chance" };
    private Random rndNumGenerator = new Random();

    @RequestMapping(value="/eightballanswer", method= RequestMethod.GET)
    public String theAnswer() {
        return answers[rndNumGenerator.nextInt(8)];
    }
}
