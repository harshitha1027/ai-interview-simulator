package com.interviewai.service;

import com.interviewai.dto.LoginRequest;
import com.interviewai.dto.RegisterRequest;
import com.interviewai.entity.User;
import com.interviewai.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;
    
    

    public String register(RegisterRequest request) {

        User existingUser =
                userRepository.findByEmail(request.getEmail());

        if (existingUser != null) {
            return "Email already exists";
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());

        userRepository.save(user);

        return "User Registered Successfully";
    }
    public String login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail());

        if(user == null) {
            return "User Not Found";
        }

        if(!user.getPassword().equals(request.getPassword())) {
            return "Invalid Password";
        }

        return "Login Successful";
    }
    
    
}