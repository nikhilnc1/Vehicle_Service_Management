package com.TechM_VSM.VehicleServiceManagement.service;

import com.TechM_VSM.VehicleServiceManagement.configuration.AppConfig;
import com.TechM_VSM.VehicleServiceManagement.dto.SignupRequest;
import com.TechM_VSM.VehicleServiceManagement.dto.UserDto;
import com.TechM_VSM.VehicleServiceManagement.model.Role;
import com.TechM_VSM.VehicleServiceManagement.model.User;
import com.TechM_VSM.VehicleServiceManagement.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.source.MapConfigurationPropertySource;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AppConfig appConfig;


    @Override
    public UserDto saveUser(SignupRequest signupRequest) {
        User newuser = new User();
        newuser.setName(signupRequest.getName());
        newuser.setEmail(signupRequest.getEmail());
        newuser.setPassword(new BCryptPasswordEncoder().encode(signupRequest.getPassword()));
        newuser.setRole(signupRequest.getRole());
        User createdUser = userRepository.save(newuser);
        UserDto userDto = new UserDto();
        userDto.setUId(createdUser.getUId());
        return userDto;
    }

    @Override
    public boolean hasUserwithEmail(String email) {
        return userRepository.findFirstByEmail(email).isPresent();
    }

    @Override
    public List<String> getAdvisorEmails() {
        Role role = Role.SERVICEADVISOR; // No need to convert string to enum, use enum directly
        List<User> users = userRepository.findByRole(role);
        List<String> emails = users.stream()
                .map(User::getEmail)
                .collect(Collectors.toList());
        return emails;
    }


}
