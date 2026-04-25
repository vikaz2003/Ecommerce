package com.vikas.User.Service.Entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name="users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      public Long id;
      @Column(unique = true)
      public String email;
      @Column(unique=true)
      public String phone;
      @Column(nullable = false)
      public String password;
      public String username;

}
