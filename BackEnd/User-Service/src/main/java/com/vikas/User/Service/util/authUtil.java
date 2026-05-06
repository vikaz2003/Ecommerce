package com.vikas.User.Service.util;


import com.vikas.User.Service.Entity.type.AuthProviderType;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Component;

import java.util.IllformedLocaleException;
import java.util.Locale;

@Component
@Slf4j
public class authUtil {


    public AuthProviderType getProviderTypeFromRegistrationId(String registrationId) {
          return switch(registrationId.toLowerCase()){
             case "google" -> AuthProviderType.GOOGLE;
             case "github" -> AuthProviderType.GITHUB;
             case "facebook" -> AuthProviderType.EMAIL;
             default -> throw new IllegalArgumentException("Unsupported OAuth2 provider "+registrationId);
          };
    }



    public String getProviderIdFromOAuth2User(String registrationId,OAuth2User user) {
         String providerId=switch(registrationId.toLowerCase()){
             case "google" -> user.getAttribute("sub");
             case "github" -> user.getAttribute("id").toString();
             default -> throw new IllformedLocaleException("Unsupported OAuth2 provider "+registrationId);
         };
         if(providerId==null||providerId.isBlank()){
             log.error("Unable to determine the providerId for provider: {}",registrationId);
             throw new IllegalArgumentException("Unable to determine the providerId for OAuth2Login");
         }
         return providerId;
    }

    public String determineEmailFromOAuth2User(OAuth2User user,String registrationId,String providerId){
        String email=user.getAttribute("email");
        if(email!=null&&!email.isBlank()){
            return email;
        }
        return switch (registrationId.toLowerCase()){
            case "google" -> user.getAttribute("sub");
            case "github" -> user.getAttribute("login");
            default -> providerId;

        };
    }
}
