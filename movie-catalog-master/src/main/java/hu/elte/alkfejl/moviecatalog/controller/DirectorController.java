package hu.elte.alkfejl.moviecatalog.controller;

import hu.elte.alkfejl.moviecatalog.model.Director;
import hu.elte.alkfejl.moviecatalog.model.User;
import hu.elte.alkfejl.moviecatalog.service.DirectorService;
import hu.elte.alkfejl.moviecatalog.service.annotations.Role;
import java.util.List;
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

    //a a getMapping searchTerm értékét eltárolja a string searthTerm-be,
    //tehát az elérési útból így lehet kiszedni egy dinamikus változót
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
