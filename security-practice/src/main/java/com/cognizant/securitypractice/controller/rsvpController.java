package com.cognizant.securitypractice.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class rsvpController {

    @RequestMapping(value="/publicEvent", method= RequestMethod.GET)
    public String viewPublicEvents() {
        return "Here are the public events.";
    }
    @RequestMapping(value="/privateEvent", method= RequestMethod.GET)
    public String viewPrivateEvents(Principal principal) {
        return "Here are the private events." + principal.getName();
    }
    @RequestMapping(value="/registerPublicEvent", method= RequestMethod.GET)
    public String viewRegisteredPublicEvents(Principal principal) {
        return "Here are the registered public events.";
    }
    @RequestMapping(value="/registerPrivateEvent", method= RequestMethod.GET)
    public String viewRegisteredPrivateEvents(Principal principal) {
        return "Here's where you register private events, " + principal.getName();
    }
    @RequestMapping(value="/guestList", method= RequestMethod.GET)
    public String viewGuestList(Principal principal) {
        return "Hello, "  + principal.getName() + ". Because you are an event publisher, you can see this guest list.";
    }

}
