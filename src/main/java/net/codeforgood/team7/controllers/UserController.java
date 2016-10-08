package net.codeforgood.team7.controllers;


import meetup.*;
import net.codeforgood.team7.models.UserModel;
import net.codeforgood.team7.models.UserResponse;
import net.codeforgood.team7.respository.UserResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserResponseRepository userResponseRepository;


    @RequestMapping(value = "/request", method = RequestMethod.GET)
    public UserModel selectUserByName() {
        UserModel userModel = new UserModel();
        userModel.setName("Chris");
        return userModel;
    }

    @RequestMapping(value = "/request", method = RequestMethod.POST)
    public ResponseEntity <Iterable<UserResponse>> requestDataGet(){
        Iterable<UserResponse> responses = userResponseRepository.findAll();
        return new ResponseEntity<>(responses, HttpStatus.OK);
    }
    @RequestMapping(value = "/testClient", method = RequestMethod.GET)
    public List testClient(){

        MeetupClient c;
        boolean oauth = false;

        ClientSettings settings = new ClientSettings();

        settings.setMeetupKey("116528185c6768552f13a6171217fb");
        settings.setConsumerToken(new Token("verb.for.shoe", "f5281e69ea6b3c14399b67b8"));
        settings.setOAuthCallbackUrl("x-meetup-demo://app");

        c = new MeetupClient();
        c.setClientSettings(settings);
        EventSearchCriteria eventSearchCriteria = new EventSearchCriteria();
        eventSearchCriteria.setCity("Wilmington");
        return c.getEvents(eventSearchCriteria);

        }
    }

