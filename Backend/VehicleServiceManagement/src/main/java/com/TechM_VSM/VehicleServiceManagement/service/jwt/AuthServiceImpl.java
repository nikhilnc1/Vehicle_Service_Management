package com.TechM_VSM.VehicleServiceManagement.service.jwt;


import com.TechM_VSM.VehicleServiceManagement.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {
	
	private final UserRepository userRepository;
	
	public AuthServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
	
	@Override
	public UserDetailsService userDetailsService() {
		return new UserDetailsService() {
			
			@Override
			public UserDetails loadUserByUsername(String username) {
				return userRepository.findFirstByEmail(username)
						.orElseThrow(() ->new UsernameNotFoundException("User not found !"));
			}

		};
	}

}
