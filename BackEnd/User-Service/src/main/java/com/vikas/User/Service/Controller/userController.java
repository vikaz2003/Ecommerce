package com.vikas.User.Service.Controller;


import com.vikas.User.Service.Entity.User;
import com.vikas.User.Service.Entity.loginDTO;
import com.vikas.User.Service.Service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:5173")
public class userController {

    @Autowired
    public AuthService authService;

 

    @PostMapping("/signup")
    public ResponseEntity<String> createUser(@RequestBody User user){
         return authService.createUser(user);
     }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody loginDTO info){

        return authService.login(info);
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(String token){
        
    }




}
