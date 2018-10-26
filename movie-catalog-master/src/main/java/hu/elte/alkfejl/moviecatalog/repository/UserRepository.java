package hu.elte.alkfejl.moviecatalog.repository;

import hu.elte.alkfejl.moviecatalog.model.User;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

//adatbázissal kommunikál, tehát olyan logikai egység, ami azért felelős, hogy a kód képes legyen komunikálni az entitásokkal, és az adatbázisból, objektumokat fog várni
@Repository
public interface UserRepository extends CrudRepository<User, String> {
    Optional<User> findByEmail(String email);

    Optional<User> findByUsername(String username);

    Optional<User> findByEmailAndPassword(String email, String password);

    Optional<User> findByUsernameAndPassword(String username, String password);
}
