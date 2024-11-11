package com.TechM_VSM.VehicleServiceManagement.controller;

import com.TechM_VSM.VehicleServiceManagement.dto.*;
import com.TechM_VSM.VehicleServiceManagement.model.Role;
import com.TechM_VSM.VehicleServiceManagement.model.User;
import com.TechM_VSM.VehicleServiceManagement.repository.UserRepository;
import com.TechM_VSM.VehicleServiceManagement.security.JWTHelper;
import com.TechM_VSM.VehicleServiceManagement.service.UserService;
import com.TechM_VSM.VehicleServiceManagement.service.jwt.AuthService;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/user")
//@CrossOrigin()
@RequiredArgsConstructor
@NoArgsConstructor(force = true)
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private final AuthService authService;

    @Autowired
    private final JWTHelper jwtUtil;

    @Autowired
    private final UserRepository userRepository;

    public UserController(AuthService authService, UserService userService, UserRepository userRepository, JWTHelper jwtUtil, AuthenticationManager authenticationManager) {
        this.authService = authService;
        this.userService = userService;
        this.jwtUtil = jwtUtil;
        this.userRepository = userRepository;
    }



    @GetMapping("/getAllAdvisorEmails")
    public ResponseEntity<List<UserDto>> getAllAdvisorEmails() {
        List<String> emails = userService.getAdvisorEmails();
        List<UserDto> userDtos = emails.stream()
                .map(email -> {
                    UserDto userDto = new UserDto();
                    userDto.setEmail(email);
                    return userDto;
                })
                .collect(Collectors.toList());
        return new ResponseEntity<>(userDtos, HttpStatus.OK);
    }


    @PostMapping("/signup")
    public ResponseEntity<?> add(@RequestBody SignupRequest signupRequest) {
        if (userService.hasUserwithEmail(signupRequest.getEmail())) {
            return new ResponseEntity<>("Customer already exists with this email!", HttpStatus.CONFLICT);
        }

        UserDto createdUserDto = userService.saveUser(signupRequest);
        if (createdUserDto == null) {
            return new ResponseEntity<>("Customer not created", HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(createdUserDto, HttpStatus.CREATED);
    }

    @GetMapping("/test")
    public String getUser()
    {
        System.out.println("Getting user");
        return "Welcome";
    }


    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) {
        String email = authenticationRequest.getEmail();
        String password = authenticationRequest.getPassword();

        Optional<User> optionalUser = userRepository.findFirstByEmail(email);
        if (optionalUser.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found");
        }

        User user = optionalUser.get();
        if (!passwordMatches(password, user.getPassword())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid password");
        }

        final UserDetails userDetails = authService.userDetailsService().loadUserByUsername(authenticationRequest.getEmail());
        String jwt = jwtUtil.generateToken(userDetails);

        AuthenticationResponse authenticationResponse = new AuthenticationResponse(
                jwt,
                user.getUId(),
                user.getRole(),
                user.getName(),
                user.getEmail()
        );

        return ResponseEntity.ok(authenticationResponse);
    }

    private boolean passwordMatches(String plainPassword, String hashedPassword) {
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
        return bcrypt.matches(plainPassword, hashedPassword);
    }

}
