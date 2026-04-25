package com.vikas.User.Service.Service;


import com.vikas.User.Service.Entity.EmailUpdateDTO;
import com.vikas.User.Service.Entity.PasswordUpdateDTO;
import com.vikas.User.Service.Entity.Profile;
import com.vikas.User.Service.Entity.ProfileUpdateDTO;
import com.vikas.User.Service.Repo.profileRepo;
import com.vikas.User.Service.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class profileService {

    @Autowired
    private profileRepo repo;


    @Autowired
    private BCryptPasswordEncoder passwordEncoder;


    public Profile getProfile(Long id) {
         return repo.findById(id).orElse(null);
    }


    public Profile updateProfile(Long id, ProfileUpdateDTO info) {
        Profile profile = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Profile not found"));
        if(info.getAddress()!=null) {
            profile.setAddress(info.getAddress());
        }
        if(info.getFirstName()!=null){
            profile.setFirstName(info.getFirstName());
        }
        if(info.getLastName()!=null){
            profile.setLastName(info.getLastName());
        }
        repo.save(profile);
        return profile;


    }

    public Profile updateEmail(Long id, EmailUpdateDTO email) {
           Profile profile=repo.findById(id)
                   .orElseThrow(() -> new ResourceNotFoundException("Profile not found"));
           if(email.getEmail()!=null){
               profile.setEmail(email.getEmail());
           }
           repo.save(profile);
           return profile;
    }

    public Profile updatePassword(Long id, PasswordUpdateDTO password) {
        Profile profile=repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Profile not found"));
        if(password.getCurrentPassword()!=null&&passwordEncoder.matches(password.getCurrentPassword(), profile.getPassword())){
            String hashedPassword=passwordEncoder.encode(password.getNewPassword());
            profile.setPassword(hashedPassword);
            repo.save(profile);
            return profile;
        }else{
             throw new IllegalArgumentException("Current password is incorrect");
        }

    }


}



