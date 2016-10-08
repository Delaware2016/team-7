package respository;

import nobles.christopher.depulse.models.UserResponse;
import org.springframework.data.repository.CrudRepository;


public interface UserResponseRepository extends CrudRepository<UserResponse, Long>{
    UserResponse findByZipcode(String zipcode);
}


