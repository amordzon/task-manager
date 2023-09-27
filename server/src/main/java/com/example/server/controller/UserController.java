package com.example.server.controller;

import com.example.server.dto.BaseDTO;
import com.example.server.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class UserController {

    private UserService userService;

    @GetMapping
    public BaseDTO getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/{id}")
    public BaseDTO getUser(@PathVariable String id) {
        return userService.getUser(id);
    }


}
