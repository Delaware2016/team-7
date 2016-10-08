package net.codeforgood.team7.controllers;

import net.codeforgood.team7.models.UserModel;
import net.codeforgood.team7.models.UserResponse;
import net.codeforgood.team7.respository.UserResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserResponseRepository userResponseRepository;


    @RequestMapping(value = "/user/zipcode/{zipcode}", method = RequestMethod.GET)
    public UserModel selectUserByName(@PathVariable String zipcode) {
        UserModel userModel = new UserModel();
        userModel.setName(zipcode);
        UserResponse userResponse = new UserResponse();
        userResponseRepository.findByZipcode(zipcode);
        userResponseRepository.save(userResponse);


        return userModel;
    }

    @RequestMapping(value = "/request", method = RequestMethod.POST)
    public ResponseEntity <Iterable<UserResponse>> requestDataGet(){
        Iterable<UserResponse> responses = userResponseRepository.findAll();
        return new ResponseEntity<>(responses, HttpStatus.OK);
    }
    }

