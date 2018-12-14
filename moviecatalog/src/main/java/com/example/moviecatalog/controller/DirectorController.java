package com.example.moviecatalog.controller;

import com.example.moviecatalog.annotation.Role;
import com.example.moviecatalog.model.Director;
import com.example.moviecatalog.model.User;
import com.example.moviecatalog.service.DirectorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/director")
public class DirectorController {

    @Autowired
    private DirectorService directorService;

    @GetMapping("/{id}")
    public Director getDirector(@PathVariable Long id) {
        return directorService.getDirectorById(id);
    }

    @GetMapping("/directors")
    public List<Director> getDirectors() {
        return directorService.getAllDirectors();
    }

    @GetMapping("/searchDirector/{searchTerm}")
    public List<Director> searchDirector(@PathVariable String searchTerm) {
        return directorService.searchDirector(searchTerm);
    }

    @Role({User.Role.ADMIN, User.Role.USER})
    @PostMapping("/addDirector")
    public Director addDirector(@RequestBody Director director) {
        return directorService.addDirector(director);
    }

    @Role({User.Role.ADMIN})
    @PutMapping("/updateDirector")
    public Director updateDirector(@RequestBody Director director) {
        return directorService.updateDirector(director);
    }

    @Role({User.Role.ADMIN})
    @DeleteMapping("/deleteDirector/{id}")
    public ResponseEntity deleteDirector(@PathVariable Long id) {
        directorService.deleteDirector(id);
        return ResponseEntity.ok(directorService.getAllDirectors());
    }
}
