package hu.elte.alkfejl.moviecatalog.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

//Entity mert egy adatbázis táblát képvisel
@Entity
@Table(name = "MOVIE")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movie extends BaseEntity {


    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String genre;

    @Column(nullable = false)
    private Date publicationDate;
    
    @Column(nullable = false)
    private Long directorId;
    
    //egy rendező több filmet is rendezhet...
    @ManyToMany()
    @JoinTable(name = "movie_director")
    private Set<Director> directors = new HashSet<>();

    //egy filmnek sok kritikája lehet
    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL) //mapped miatt kettejük kapcsolatában a "movie" a főnök, saját magát adja át paraméternek
    private Set<Review> reviews = new HashSet<>();
   
    
}
