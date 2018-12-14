package com.example.moviecatalog.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "REVIEW")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Version
    private int version;

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
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate date;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Review review1 = (Review) o;
        return rate == review1.rate &&
            Objects.equals(user, review1.user) &&
            Objects.equals(movie, review1.movie) &&
            Objects.equals(review, review1.review) &&
            Objects.equals(date, review1.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), user, movie, review, rate, date);
    }
}

