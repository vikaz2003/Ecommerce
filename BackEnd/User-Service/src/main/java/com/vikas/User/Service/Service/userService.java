package com.vikas.User.Service.Service;

import com.vikas.User.Service.Entity.User;
import com.vikas.User.Service.Entity.loginDTO;
import com.vikas.User.Service.Repo.userRepo;
import com.vikas.User.Service.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class userService {

    @Autowired
    public userRepo repo;

    @Autowired
    public BCryptPasswordEncoder encoder;

    @Autowired
    private JwtUtil jwtUtil;

    public ResponseEntity<String> createUser(User user) {

        if(user.getEmail()!=null && repo.existsByEmail(user.getEmail())){
             return new ResponseEntity<>("Email Already Exists", HttpStatus.ALREADY_REPORTED);
        }

        if(user.getPhone()!=null && repo.existsByPhone(user.getPhone())){
            return new ResponseEntity<>("Phone Number Already Exists",HttpStatus.ALREADY_REPORTED);
        }
        String hashedPassword=encoder.encode(user.getPassword());
        user.setPassword(hashedPassword);
        repo.save(user);
        return new ResponseEntity<>("User Created",HttpStatus.CREATED);

    }


    public ResponseEntity<?> login(loginDTO info) {
        String email=info.getEmail();
        String phone=info.getPhone();
        if(email==null&&phone==null) {
             return new ResponseEntity<>("Email or Phone Number Required",HttpStatus.BAD_REQUEST);
        }
        User user=null;
        if(email!=null){
            user=repo.findByEmail(email);
        }else if(phone!=null){
            user=repo.findByPhone(phone);
        }

        if(user!=null&&encoder.matches(info.getPassword(),user.getPassword())){
            String token=jwtUtil.generateToken(user.getId());
            return new ResponseEntity<>(token,HttpStatus.OK);
        }

        return new ResponseEntity<>("Login Failed",HttpStatus.UNAUTHORIZED);

    }


}
