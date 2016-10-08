package respository;

import models.UserResponse;
import org.springframework.data.repository.CrudRepository;


public interface UserResponseRepository extends CrudRepository<UserResponse, Long>{
    UserResponse findByZipcode(String zipcode);
}


