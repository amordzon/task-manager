package com.example.server.controller;

import com.example.server.dto.BaseDTO;
import com.example.server.dto.UserDTO;
import com.example.server.exception.ResourceNotFoundException;
import com.example.server.model.User;
import com.example.server.service.UserService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class UserController {

    private UserService userService;
    private ModelMapper modelMapper;


    @GetMapping
    public BaseDTO getUsers() {
        List<User> users = userService.getUsers();
        List<UserDTO> usersDTO=users.stream().map((user)-> modelMapper.map(user, UserDTO.class)).collect(Collectors.toList());
        return new BaseDTO("Users data", usersDTO);
    }

    @GetMapping("/{id}")
    public BaseDTO getUser(@PathVariable String id) {
        User user = userService.getUser(id);
        if(user==null){
            throw new ResourceNotFoundException("User not found");
        }
        UserDTO userDTO = modelMapper.map(user, UserDTO.class);
        return new BaseDTO("User data", userDTO);
    }


}
