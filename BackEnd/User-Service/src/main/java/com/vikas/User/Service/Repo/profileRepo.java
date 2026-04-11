package com.vikas.User.Service.Repo;

import com.vikas.User.Service.Model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface profileRepo extends JpaRepository<Profile,Long> {

}
