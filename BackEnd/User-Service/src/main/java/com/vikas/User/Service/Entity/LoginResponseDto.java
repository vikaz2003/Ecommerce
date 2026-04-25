package com.vikas.User.Service.Entity;


import jakarta.persistence.Entity;
import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponseDto {

    private Long id;
    private String token;
}
