package com.vikas.User.Service.Controller;


import com.vikas.User.Service.Model.User;
import com.vikas.User.Service.Model.loginDTO;
import com.vikas.User.Service.Service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:5173")
public class userController {

    @Autowired
    public userService userService;

 

    @PostMapping("/signup")
    public ResponseEntity<String> createUser(@RequestBody User user){
         return userService.createUser(user);
     }

    @PostMapping("/login")
    public ResponseEntity<?> signUp(@RequestBody loginDTO info){

        return userService.login(info);
    }




}
