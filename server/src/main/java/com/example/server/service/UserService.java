package com.example.server.service;

import com.example.server.model.User;
import com.example.server.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {

    private UserRepository userRepository;

    public List<User> getUsers(){
        List<User> users = userRepository.findAll();
        return users;
    }

    public User getUser(String id){
        User user = userRepository.findById(id).orElse(null);
        return user;
    }
}
