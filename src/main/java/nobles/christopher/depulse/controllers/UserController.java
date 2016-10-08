package nobles.christopher.depulse.controllers;

import nobles.christopher.depulse.models.UserModel;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
/**
 * Created by christophernobles on 10/7/16.
 */
@RestController
public class UserController {


    @RequestMapping(value = "/request", method = RequestMethod.GET)
    public UserModel selectUserByName() {
        UserModel userModel = new UserModel();
        userModel.setName("Chris");
        return userModel;
    }

}
