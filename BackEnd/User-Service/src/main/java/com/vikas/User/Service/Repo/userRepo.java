package com.vikas.User.Service.Repo;

import com.vikas.User.Service.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface userRepo extends JpaRepository<User,Long> {

     boolean existsByEmail(String email);
     boolean existsByPhone(String phone);

     Long getIdByEmail(String email);
     Long getIdByPhone(String phone);

     User findByEmail(String email);
     User findByPhone(String phone);

}
