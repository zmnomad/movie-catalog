package hu.elte.alkfejl.moviecatalog.service;

import hu.elte.alkfejl.moviecatalog.search.MovieSearch;
import hu.elte.alkfejl.moviecatalog.model.Director;
import hu.elte.alkfejl.moviecatalog.model.Movie;
import hu.elte.alkfejl.moviecatalog.model.User;
import hu.elte.alkfejl.moviecatalog.repository.DirectorRepository;
import hu.elte.alkfejl.moviecatalog.repository.MovieRepository;
import hu.elte.alkfejl.moviecatalog.service.exceptions.UserNotValidException;
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
    

}
