package com.vikas.User.Service.configuration;


import com.vikas.User.Service.Security.OAuth2SuccessHandler;
import com.vikas.User.Service.filter.JwtFilter;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@RequiredArgsConstructor
@Slf4j
public class SecurityConfig {




    private final JwtFilter jwtFilter;
    private final PasswordEncoder passwordEncoder;
    private final ModelMapper modelMapper;
    private final OAuth2SuccessHandler oAuth2SuccessHandler;


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
            http.csrf(AbstractHttpConfigurer::disable)
                    .authorizeHttpRequests(auth ->  auth
                            .requestMatchers("/api/user/signup","/api/user/login").permitAll()
                            .anyRequest().authenticated())
                    .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
                    .oauth2Login(oAuth2->
                                    oAuth2.
                                            failureHandler((request,response,exception)->{
                                                log.error("OAuth2 Error: {}", exception.getMessage());
                                                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "OAuth2 Authentication Failed");

                        }
                    )
                                            .successHandler(oAuth2SuccessHandler)
                    );
                            return http.build();


    }
}
