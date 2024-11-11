package com.TechM_VSM.VehicleServiceManagement.repository;

import com.TechM_VSM.VehicleServiceManagement.model.Role;
import com.TechM_VSM.VehicleServiceManagement.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findFirstByEmail(String email);

    List<User> findByRole(Role roleEnum);

//    @Modifying
//    @Query("UPDATE User u SET u.status = 'pending', u.date = CURRENT_DATE WHERE u.status = 'servicing completed' AND u.date <= :twoMonthsAgo")
//    void updateStatusAndDate(LocalDate twoMonthsAgo);
}
