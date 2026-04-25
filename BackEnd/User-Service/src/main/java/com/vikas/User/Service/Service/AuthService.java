package com.vikas.User.Service.Service;

import com.vikas.User.Service.Entity.LoginResponseDto;
import com.vikas.User.Service.Entity.User;
import com.vikas.User.Service.Entity.loginDTO;
import com.vikas.User.Service.Entity.type.AuthProviderType;
import com.vikas.User.Service.Repo.userRepo;
import com.vikas.User.Service.util.JwtUtil;
import com.vikas.User.Service.util.authUtil;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {


    private final userRepo repo;
    private final BCryptPasswordEncoder encoder;
    private final JwtUtil jwtUtil;
    private final authUtil authUtil;

    public ResponseEntity<String> createUser(User user) {

        if(user.getEmail()!=null && repo.existsByEmail(user.getEmail())){
             return new ResponseEntity<>("Email Already Exists", HttpStatus.CONFLICT);
        }

        if(user.getPhone()!=null && repo.existsByPhone(user.getPhone())){
            return new ResponseEntity<>("Phone Number Already Exists",HttpStatus.CONFLICT);
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
            user=repo.findByEmail(email).orElse(null);
        }else if(phone!=null){
            user=repo.findByPhone(phone);
        }

        if(user!=null&&encoder.matches(info.getPassword(),user.getPassword())){
            String token=jwtUtil.generateToken(user.getId());
            return new ResponseEntity<>(new LoginResponseDto(user.getId(),token),HttpStatus.OK);
        }

        return new ResponseEntity<>("Login Failed",HttpStatus.UNAUTHORIZED);

    }

    @Transactional
    public ResponseEntity<LoginResponseDto> handleOAuth2LoginRequest(OAuth2User oAuth2User, String registrationId) {
        //providerType and providerId
        //save the providerType and providerId info with user
        //if the user has an account:directly login
        //else, first signup and login

        AuthProviderType providerType=authUtil.getProviderTypeFromRegistrationId(registrationId);
        String providerId=authUtil.getProviderIdFromOAuth2User(registrationId,oAuth2User);
        User user=repo.findByProviderIdAndProviderType(providerId,providerType);
        String email=oAuth2User.getAttribute("email");
        User emailUser=repo.findByEmail(email).orElse(null);
        if(user==null&&emailUser==null){
            //signup flow
            String email_curr=authUtil.determineEmailFromOAuth2User(oAuth2User,registrationId,providerId);
            user=signUp(email_curr,providerId,providerType);

        }
        else if(user!=null){
            if(email!=null&&!email.isBlank()&&!email.equals(user.getEmail())){
                user.setEmail(email);
                repo.save(user);

            }
        }

    }

    public User signUp(String email,String providerId,AuthProviderType providerType){
         User user=repo.findByEmail(email)
                 .orElse(null);
         if(user!=null) throw new IllegalArgumentException("User Already Exists");
         return repo.save(
                 User.builder()
                         .username(email)
                         .email(email)
                         .providerId(providerId)
                         .providerType(providerType)
                         .build()
         );
    }

}
