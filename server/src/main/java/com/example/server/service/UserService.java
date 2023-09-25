package com.example.server.service;

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

    public List<UserDTO> getUsers(){
        List<User> users = userRepository.findAll();
        for(User user : users) {
            System.out.println(user.getId());
        }
        return users.stream().map((user)-> modelMapper.map(user, UserDTO.class)).collect(Collectors.toList());
    }

    public UserDTO getUser(String id){
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        System.out.println(111);
        return modelMapper.map(user, UserDTO.class);
    }
}
