package nobles.christopher.depulse.controllers;

import nobles.christopher.depulse.models.UserModel;
import nobles.christopher.depulse.models.UserResponse;
import nobles.christopher.depulse.respository.UserResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
/**
 * Created by christophernobles on 10/7/16.
 */
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

}
