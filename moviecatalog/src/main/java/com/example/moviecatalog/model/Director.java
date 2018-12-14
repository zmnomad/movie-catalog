package com.example.moviecatalog.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Clob;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "DIRECTOR")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Director {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Version
    private int version;

    @Column(name = "director_name", nullable = false)
    private String name;

    @Column(nullable = false)
    private String nationality;

    @Column(nullable = false, columnDefinition = "text")
    private String bio;

    @JsonIgnore
    @ManyToMany(mappedBy = "directors", cascade = CascadeType.ALL)
    private Set<Movie> movies = new HashSet<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Director director = (Director) o;
        return Objects.equals(name, director.name) &&
            Objects.equals(nationality, director.nationality) &&
            Objects.equals(bio, director.bio);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), name, nationality, bio);
    }
}
