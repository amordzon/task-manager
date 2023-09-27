package com.example.server.service;

import com.example.server.dto.BaseDTO;
import com.example.server.dto.UserDTO;
import com.example.server.exception.ResourceNotFoundException;
import com.example.server.model.User;
import com.example.server.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserService {

    private UserRepository userRepository;
    private ModelMapper modelMapper;

    public BaseDTO getUsers(){
        List<User> users = userRepository.findAll();
        List<UserDTO> usersDTO=users.stream().map((user)-> modelMapper.map(user, UserDTO.class)).collect(Collectors.toList());
        return new BaseDTO("Users data", usersDTO);
    }

    public BaseDTO getUser(String id){
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        UserDTO userDTO = modelMapper.map(user, UserDTO.class);
        return new BaseDTO("User data", userDTO);
    }
}
