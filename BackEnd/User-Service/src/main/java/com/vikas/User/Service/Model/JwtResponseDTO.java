package com.vikas.User.Service.Model;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JwtResponseDTO {

    private String token;
    private String message;
    private Long userId;
}
