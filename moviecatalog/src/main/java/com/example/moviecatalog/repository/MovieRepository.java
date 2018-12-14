package com.example.moviecatalog.repository;

import com.example.moviecatalog.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
    Set<Movie> findByTitleContainingIgnoreCase(String title);
    Set<Movie> findByGenreContainingIgnoreCase(String genre);
    Set<Movie> findByTitleContainingIgnoreCaseOrGenreContainingIgnoreCase(String title, String genre);
}
