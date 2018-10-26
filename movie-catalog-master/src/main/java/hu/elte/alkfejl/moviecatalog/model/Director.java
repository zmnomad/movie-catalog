package hu.elte.alkfejl.moviecatalog.model;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import lombok.Data;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "DIRECTOR")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Director extends BaseEntity {

  
    @Column(name = "director_name", nullable = false)
    private String name;

    @Column(nullable = false)
    private String nationality;

    @Column(nullable = false, columnDefinition = "text")
    private String bio;

    @ManyToMany(mappedBy = "directors", cascade = CascadeType.ALL)
    private Set<Movie> movies = new HashSet<>();
   

}   


