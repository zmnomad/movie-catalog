package com.example.moviecatalog.controller;

import com.example.moviecatalog.annotation.Role;
import com.example.moviecatalog.model.Review;
import com.example.moviecatalog.model.User;
import com.example.moviecatalog.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/review")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @GetMapping("/{movieId}")
    public List<Review> getReviewsOfMovies(@PathVariable Long movieId) {
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
