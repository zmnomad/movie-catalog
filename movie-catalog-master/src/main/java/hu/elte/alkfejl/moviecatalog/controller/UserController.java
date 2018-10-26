package hu.elte.alkfejl.moviecatalog.controller;

import hu.elte.alkfejl.moviecatalog.model.User;
import hu.elte.alkfejl.moviecatalog.service.MovieService;
import hu.elte.alkfejl.moviecatalog.service.UserService;
import hu.elte.alkfejl.moviecatalog.service.exceptions.UserNotValidException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
//A controller csak a kérések fogadásával és a válasz adással foglalkozik, 
//A Service réteg a kérés és válasz közötti adat feldolgozással, adatbázissal való kommunikációval.
//A @RequestMapping("/auth") annotáció megmondja a Springnek, hogy a /auth alatt hallgasson minden végpont, minden HTTP metódusra
//@Controller annotációval jelezzük, hogy ez egy kontroller lesz, ez többek között egy Spring Bean-t készít az osztályból.
//A Spring Bean olyan osztály, amiket a Spring Dependenxy Injectionben használ, nem kell kézzel new-val létrehoznunk, 
//a Spring akkor létrehozza amikor szüksége van rá
@Controller
@RequestMapping("/user")
public class UserController {

    private UserService userService;
    
    
    //Ez egy service lesz, amely a kontrolelrekben található üzleti logikát tartalmazza. 
    //Spring Beanként hozzuk majd létre, ezért tudjuk az @Autowired annotációval beinjektálni
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
    
    //A @GetMapping("/isLoggedIn") azt állítja be, hogy a metódus a GET HTTP metódus hatására hívódjon meg méghozzá a /isLoggedIn url-en, 
    //DE mivel az egész osztályra rátettük a @RequestMapping("/user")-t ezért a / alá kerül be és lesz belőle /auth/isLoggedIn.
    @GetMapping("/isLoggedIn")
    public String user() {
        if (userService.isLoggedIn()) {
            return userService.getUser().toString();
        } else {
            return "not logged in";
        }
    }
    
    //A @PostMapping jelzi azt, hogy a metódus egy POST requestet fog kezelni a megadott route-on pl. /register vagy /login 
    //a @ModelAttribute a post metódusban érkező form adatokat parseolja fel és értelmezi User-ként, 
    //ehhez szükséges, hogy megefelelő legyen a mezők elnevezése a form-ban
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
