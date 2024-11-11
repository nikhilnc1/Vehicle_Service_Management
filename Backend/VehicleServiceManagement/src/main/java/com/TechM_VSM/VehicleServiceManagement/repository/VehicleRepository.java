package com.TechM_VSM.VehicleServiceManagement.repository;

import com.TechM_VSM.VehicleServiceManagement.dto.VehicleDto;
import com.TechM_VSM.VehicleServiceManagement.model.ServiceStatus;
import com.TechM_VSM.VehicleServiceManagement.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle,Integer> {

    Vehicle findByid(int id);

    List<Vehicle> findByServiceStatus(ServiceStatus serviceStatus);
    @Query("SELECT v FROM Vehicle v WHERE v.saEmail = ?1 AND v.serviceStatus = ?2")
    List<Vehicle> getVehicleListFromAdvisorAndServiceStatus(String sa_email, String service_status);

    List<Vehicle> findBySaEmail(String saEmail);

    @Modifying
    @Procedure("update_status_and_date")
    void updateStatusAndDate(@Param("twoMonthsAgo") LocalDate twoMonthsAgo);

//    @Modifying
//    @Query("UPDATE User u SET u.status = :status, u.servicedoneDate = :servicedoneDate WHERE u.uId = :uId")
//    void updateStatusAndDateById(String status, LocalDate servicedoneDate, int uId);

//    List<Vehicle> findByAdvisorEmailAndStatus(String getemail);

//    List<Vehicle> findByAdvisorEmailAndStatus(String getemail, String status);
}
