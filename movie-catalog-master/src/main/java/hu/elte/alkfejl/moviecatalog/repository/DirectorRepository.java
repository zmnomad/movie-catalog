package hu.elte.alkfejl.moviecatalog.repository;

import hu.elte.alkfejl.moviecatalog.model.Director;
import hu.elte.alkfejl.moviecatalog.model.Movie;
import hu.elte.alkfejl.moviecatalog.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface DirectorRepository extends JpaRepository<Director, Long> {
    List<Director> findByNameContainingIgnoreCase(String term);
}
