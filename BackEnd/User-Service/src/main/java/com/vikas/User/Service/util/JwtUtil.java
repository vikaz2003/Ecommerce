package com.vikas.User.Service.util;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwt;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    @Value("${jwt.secret}")
    private String secretKey;

    @Value("${jwt.expiration}")
    private long jwtExpirationMs;

    public String generateToken(Long userId){
        Key key= Keys.hmacShaKeyFor(secretKey.getBytes());
          return Jwts.builder()
                  .setSubject(String.valueOf(userId))
                  .claim("userId",userId)
                  .setIssuedAt(new Date())
                  .setExpiration(new Date(System.currentTimeMillis()+jwtExpirationMs))
                  .signWith(key)
                  .compact();

    }

    public Long extractUserId(String token){
        Key key=Keys.hmacShaKeyFor(secretKey.getBytes());

        Claims claims=Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
        return Long.parseLong(claims.getSubject());
    }




    public boolean validateToken(String token){
        try{
            Key key=Keys.hmacShaKeyFor(secretKey.getBytes());
            Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token);
            return true;
        }catch(Exception e){
            return false;
        }
    }






}
