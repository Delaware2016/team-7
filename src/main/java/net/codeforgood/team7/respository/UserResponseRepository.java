package net.codeforgood.team7.respository;

import net.codeforgood.team7.models.UserResponse;
import org.springframework.data.repository.CrudRepository;


public interface UserResponseRepository extends CrudRepository<UserResponse, Long>{
    UserResponse findByZipcode(String zipcode);
}


