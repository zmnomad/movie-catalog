package hu.elte.alkfejl.moviecatalog.repository;

import hu.elte.alkfejl.moviecatalog.model.Movie;
import hu.elte.alkfejl.moviecatalog.model.User;
import java.awt.print.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.Set;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
    Set<Movie> findByTitleContainingIgnoreCase(String title);
    Set<Movie> findByGenreContainingIgnoreCase(String genre);
    Set<Movie> findByTitleContainingIgnoreCaseOrGenreContainingIgnoreCase(String title, String genre);
}
