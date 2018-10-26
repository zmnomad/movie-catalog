package hu.elte.alkfejl.moviecatalog.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;


@Entity
@Table(name = "REVIEW")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review extends BaseEntity {

    @ManyToOne
    @JoinColumn(name = "user")
    private User user;

    @ManyToOne
    @JoinColumn(name = "movie")
    private Movie movie;

    @Column(nullable = false, columnDefinition = "text")
    private String review;

    @Column(nullable = false)
    private int rate;

    @Column(nullable = false)
    private LocalDate date;

   
   
}


