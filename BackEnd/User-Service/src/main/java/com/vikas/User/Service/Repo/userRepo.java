package com.vikas.User.Service.Repo;

import com.vikas.User.Service.Entity.User;
import com.vikas.User.Service.Entity.type.AuthProviderType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface userRepo extends JpaRepository<User,Long> {

     User findByProviderIdAndProviderType(String providerId, AuthProviderType providerType) ;


    boolean existsByEmail(String email);
     boolean existsByPhone(String phone);



     Optional<User> findByEmail(String email);
     User findByPhone(String phone);
     Optional<User> findByUsername(String username);

}
