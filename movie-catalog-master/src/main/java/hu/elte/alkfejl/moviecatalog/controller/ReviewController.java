package hu.elte.alkfejl.moviecatalog.controller;

import hu.elte.alkfejl.moviecatalog.model.Review;
import hu.elte.alkfejl.moviecatalog.model.User;
import hu.elte.alkfejl.moviecatalog.service.ReviewService;
import hu.elte.alkfejl.moviecatalog.service.annotations.Role;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/review")
public class ReviewController {
    
    @Autowired
    private ReviewService reviewService;

    @GetMapping("/{movieId}")
    public List<Review> getReviewsOfMovie(@PathVariable Long movieId) {
        return reviewService.getReviewsOfMovie(movieId);
    }

    @Role({User.Role.ADMIN, User.Role.USER})
    @PostMapping("/addReview")
    public Review addReview(@RequestBody Review review) {
        return reviewService.addReview(review);
    }

    @Role({User.Role.ADMIN})
    @DeleteMapping("/deleteReview/{id}")
    public void deleteReview(@PathVariable Long id) {
        reviewService.deleteReview(id);
    }

    
}
