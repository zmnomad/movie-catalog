package com.example.moviecatalog.service;

import com.example.moviecatalog.dto.MovieSearch;
import com.example.moviecatalog.model.Director;
import com.example.moviecatalog.model.Movie;
import com.example.moviecatalog.repository.DirectorRepository;
import com.example.moviecatalog.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;


@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private DirectorRepository directorRepository;

    public Set<Movie> getAllMovies() {
        return new HashSet<>(movieRepository.findAll());
    }

    public Movie addMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    public Movie getMovieById(Long id) {
        return movieRepository.findOne(id);
    }

    public Movie updateMovie(Movie movie) {
        return movie.getId() == null ? movie : movieRepository.save(movie);
    }

    public void deleteMovie(Long id) {
        movieRepository.delete(id);
    }

    public Set<Movie> searchMovie(MovieSearch criteria) {
        if (criteria.getDirector() != null) {
            return directorRepository.findByNameContainingIgnoreCase(criteria.getDirector())
                .stream()
                .map(Director::getMovies)
                .flatMap(Collection::stream)
                .filter(b -> filterMovie(b, criteria))
                .collect(Collectors.toSet());
        } else {
            if (criteria.getTitle() != null || criteria.getGenre() != null) {
                return searchByCriteria(criteria);
            } else {
                return getAllMovies();
            }
        }
    }

    private boolean filterMovie(Movie movie, MovieSearch criteria) {
        if (criteria.getGenre() != null && !movie.getGenre().toLowerCase().contains(criteria.getGenre().toLowerCase())) {
            return false;
        }
        if (criteria.getTitle() != null && !movie.getTitle().toLowerCase().contains(criteria.getTitle().toLowerCase())) {
            return false;
        }
        return true;
    }

    private Set<Movie> searchByCriteria(MovieSearch criteria) {
        if (criteria.getGenre() != null) {
            if (criteria.getTitle() != null) {
                return movieRepository.findByTitleContainingIgnoreCaseOrGenreContainingIgnoreCase(criteria.getTitle(), criteria.getGenre());
            } else {
                return movieRepository.findByGenreContainingIgnoreCase(criteria.getGenre());
            }
        } else {
            return movieRepository.findByTitleContainingIgnoreCase(criteria.getTitle());
        }
    }

}
