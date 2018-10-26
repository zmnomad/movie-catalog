package hu.elte.alkfejl.moviecatalog.repository;

import hu.elte.alkfejl.moviecatalog.model.Review;
import hu.elte.alkfejl.moviecatalog.model.Movie;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByMovie(Movie movie);
}
