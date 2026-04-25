package com.vikas.User.Service.Controller;


import com.vikas.User.Service.Entity.EmailUpdateDTO;
import com.vikas.User.Service.Entity.PasswordUpdateDTO;
import com.vikas.User.Service.Entity.Profile;
import com.vikas.User.Service.Entity.ProfileUpdateDTO;
import com.vikas.User.Service.Service.profileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "http://localhost:5173")
public class profileController {

     @Autowired
     private profileService service;


    @GetMapping("/{id}")
    public Profile getProfile(@PathVariable Long id){

        return service.getProfile(id);
    }

    @PutMapping("/{id}")
    public Profile updateProfile(@PathVariable Long id, @RequestBody ProfileUpdateDTO info){
        return service.updateProfile(id,info);
    }

    @PutMapping("/{id}/email")
    public Profile updateEmail(@PathVariable Long id, @RequestBody EmailUpdateDTO email){
        return service.updateEmail(id,email);
    }

    @PutMapping("/{id}/password")
    public Profile updatePassword(@PathVariable Long id,@RequestBody PasswordUpdateDTO password){
        return service.updatePassword(id,password);
    }


}
