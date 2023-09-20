package com.example.server.controller;

import com.example.server.model.User;
import com.example.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<User>> getUsers(){
        List<User> users = userRepository.findAll();
        if(users.isEmpty()){
            return ResponseEntity.notFound().build();
        } else {
            System.out.println("Users found:");
            for (User user : users) {
                System.out.println(user.toString()); // Assuming you have overridden toString() in UserEntity
            }
            return ResponseEntity.ok(users);
        }
    }


}
