package com.vikas.User.Service.Entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class loginDTO {


    private String email;
    private String password;
    private String phone;
}
