package com.example.moviecatalog.repository;

import com.example.moviecatalog.model.Movie;
import com.example.moviecatalog.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByMovie(Movie movie);
}
