package hu.elte.alkfejl.moviecatalog.controller;


import hu.elte.alkfejl.moviecatalog.model.Movie;
import hu.elte.alkfejl.moviecatalog.model.User;
import hu.elte.alkfejl.moviecatalog.search.MovieSearch;
import hu.elte.alkfejl.moviecatalog.service.MovieService;
import hu.elte.alkfejl.moviecatalog.service.annotations.Role;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public Set<Movie> getMovie() {
        return movieService.getAllMovies();
    }

    //@PostMapping("/searchMovie")
    

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
