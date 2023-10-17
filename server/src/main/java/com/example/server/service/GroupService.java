package com.example.server.service;

import com.example.server.dto.BaseDTO;
import com.example.server.dto.GroupDTO;
import com.example.server.exception.ResourceAlreadyExists;
import com.example.server.exception.ResourceNotFoundException;
import com.example.server.model.Group;
import com.example.server.model.User;
import com.example.server.repository.GroupRepository;
import com.example.server.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class GroupService {
    private GroupRepository groupRepository;
    private UserRepository userRepository;
    private ModelMapper modelMapper;


    public BaseDTO getGroups() {
        List<Group> groups = groupRepository.findAll();
        List<GroupDTO> groupsDTO = groups.stream().map((group)-> modelMapper.map(group, GroupDTO.class)).collect(Collectors.toList());
        return new BaseDTO("Groups info", groupsDTO);
    }

    public BaseDTO getGroup(String id) {
        Group group = groupRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Group not found"));
        GroupDTO groupDTO = modelMapper.map(group, GroupDTO.class);
        return new BaseDTO("Group info", groupDTO);
    }

    public BaseDTO createGroup(Group group, String adminID) {
        User admin = userRepository.findById(adminID).orElseThrow(()-> new ResourceNotFoundException("User with that ID doesn't exist"));
        group.setAdmin(admin);
        if(group.getUsers() != null && !group.getUsers().isEmpty()){
            List<User> users = new ArrayList<>();
            for(User user : group.getUsers()){
                User u = userRepository.findById(user.getId()).orElseThrow(()-> new ResourceNotFoundException("User with that ID doesn't exist"));
                users.add(u);
            }
            users.add(admin);
            group.setUsers(users);
        }
        groupRepository.save(group);
        GroupDTO groupDTO = modelMapper.map(group, GroupDTO.class);
        return new BaseDTO("Group created", groupDTO);
    }


    public BaseDTO updateGroup(Group updatedGroup, String groupID) {
        Group group=groupRepository.findById(groupID).orElseThrow(()->new ResourceNotFoundException("Group with this ID does not exist"));
        group.setName(updatedGroup.getName());
        group.setDescription(updatedGroup.getDescription());
        List<User> users = new ArrayList<>();
        for(User user: updatedGroup.getUsers()){
            User currUser = userRepository.findById(user.getId()).orElseThrow(()-> new ResourceNotFoundException("User with this ID does not exist"));
            users.add(currUser);
        }
        if(!users.contains(group.getAdmin())){
            throw new ResourceAlreadyExists("You cannot remove admin from the group!");
        }
        group.setUsers(users);
        groupRepository.save(group);
        GroupDTO groupDTO = modelMapper.map(group, GroupDTO.class);
        return new BaseDTO("Group updated", groupDTO);
    }

    public ResponseEntity<Void> deleteGroup(String id) {
        Group group = groupRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Group with this ID does not exist"));
        groupRepository.delete(group);
        return ResponseEntity.noContent().build();
    }

}
