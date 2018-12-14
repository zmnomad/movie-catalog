package com.example.moviecatalog.service;

import com.example.moviecatalog.model.Director;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import com.example.moviecatalog.repository.DirectorRepository;

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
