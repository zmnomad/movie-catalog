package hu.elte.alkfejl.moviecatalog.service;

import hu.elte.alkfejl.moviecatalog.model.Review;
import hu.elte.alkfejl.moviecatalog.model.Movie;
import hu.elte.alkfejl.moviecatalog.repository.MovieRepository;
import java.time.LocalDate;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import hu.elte.alkfejl.moviecatalog.repository.ReviewRepository;

@Service
public class ReviewService {

   @Autowired
   private ReviewRepository reviewRepository;

   @Autowired
   private MovieRepository movieRepository;

   @Autowired
   private UserService session;

   public Review addReview(Review review) {
      review.setUser(session.getUser());
      review.setDate(LocalDate.now());
      return reviewRepository.save(review);
   }

   public List<Review> getReviewsOfMovie(Long movieId) {
      Movie movie = movieRepository.findOne(movieId);
      if (movie == null) {
         return Collections.emptyList();
      } else {
         return movie.getReviews().stream().sorted(Comparator.comparing(Review::getDate)).collect(Collectors.toList());
      }
   }

   public void deleteReview(Long id) {
      reviewRepository.delete(id);
   }
}

