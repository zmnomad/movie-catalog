package com.example.moviecatalog.controller;

import com.example.moviecatalog.annotation.Role;
import com.example.moviecatalog.dto.MovieSearch;
import com.example.moviecatalog.model.Movie;
import com.example.moviecatalog.model.User;
import com.example.moviecatalog.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/movie")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping("/{id}")
    public Movie getMovie(@PathVariable Long id) {
        return movieService.getMovieById(id);
    }

    @GetMapping("/movies")
    public Set<Movie> getMovies() {
        return movieService.getAllMovies();
    }

    @PostMapping("/searchMovie")
    public Set<Movie> searchMovie(@RequestBody MovieSearch movieSearch) {
        return movieService.searchMovie(movieSearch);
    }

    @Role({User.Role.ADMIN, User.Role.USER})
    @PostMapping("/addMovie")
    public Movie addMovie(@RequestBody Movie movie) {
        return movieService.addMovie(movie);
    }

    @Role({User.Role.ADMIN})
    @PutMapping("/updateMovie")
    public Movie updateMovie(@RequestBody Movie movie) {
        return movieService.updateMovie(movie);
    }

    @Role({User.Role.ADMIN})
    @DeleteMapping("/deleteMovie/{id}")
    public ResponseEntity deleteMovie(@PathVariable Long id) {
        movieService.deleteMovie(id);
        return ResponseEntity.ok(movieService.getAllMovies());
    }

}
