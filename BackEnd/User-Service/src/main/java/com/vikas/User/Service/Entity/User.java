package com.vikas.User.Service.Entity;


import com.vikas.User.Service.Entity.type.AuthProviderType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name="users",indexes = {
        @Index(name="index_provider_id_provider_type",columnList = "providerId,providerType")
})
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
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
      public AuthProviderType providerType;
      public String providerId;

}
