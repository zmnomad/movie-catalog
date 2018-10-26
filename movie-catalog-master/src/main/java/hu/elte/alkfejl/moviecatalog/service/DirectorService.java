package hu.elte.alkfejl.moviecatalog.service;

import hu.elte.alkfejl.moviecatalog.model.Movie;
import hu.elte.alkfejl.moviecatalog.model.Review;
import hu.elte.alkfejl.moviecatalog.model.Director;
import hu.elte.alkfejl.moviecatalog.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Collections;
import hu.elte.alkfejl.moviecatalog.repository.DirectorRepository;
import java.util.List;

@Service
public class DirectorService {

    @Autowired
    private DirectorRepository directorRepository;

    public List<Director> searchDirector(String searchTerm) {
        return directorRepository.findByNameContainingIgnoreCase(searchTerm);
    }

    public Director getDirectorById(Long id) {
        return directorRepository.findOne(id);
    }

    public List<Director> getAllDirectors() {
        return directorRepository.findAll();
    }

    public Director addDirector(Director director) {
        return directorRepository.save(director);
    }

    public Director updateDirector(Director director) {
        return director.getId() == null ? director : directorRepository.save(director);
    }

    public void deleteDirector(Long id) {
        directorRepository.delete(id);
    }
}
