package com.example.moviecatalog.controller;

import com.example.moviecatalog.exception.UserNotValidException;
import com.example.moviecatalog.model.User;
import com.example.moviecatalog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/isLoggedIn")
    public String user() {
        if (userService.isLoggedIn()) {
            return userService.getUser().toString();
        } else {
            return "not logged in";
        }
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        try {
            return userService.login(user);
        } catch (UserNotValidException e) {
            return null;
        }
    }

    @GetMapping("/logout")
    public void logout() {
        userService.logout();
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.register(user);
    }

}
