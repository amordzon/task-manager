package com.example.server.service;

import com.example.server.exception.ResourceAlreadyExists;
import com.example.server.exception.ResourceNotFoundException;
import com.example.server.model.Group;
import com.example.server.model.User;
import com.example.server.repository.GroupRepository;
import com.example.server.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class GroupService {
    private GroupRepository groupRepository;
    private UserRepository userRepository;
    private UserService userService;

    public List<Group> getGroups() {
        return groupRepository.findAll();
    }

    public Group getGroup(String id) {
        return groupRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Group not found"));
    }


    public List<Group> getMyGroups() {
        User user = userService.getCurrentUser();
        return groupRepository.findAllByUsersContaining(user);

    }


    public List<User> getUsersFromRepository(List<User> userList) throws ResourceNotFoundException {
        List<User> users = new ArrayList<>();

        for (User user : userList) {
            User fetchedUser = userRepository.findById(user.getId())
                    .orElseThrow(() -> new ResourceNotFoundException("User not found: " + user.getId()));
            users.add(fetchedUser);
        }

        return users;
    }


    public Group createGroup(Group group) throws ResourceNotFoundException {
//        if (group.getUsers() != null && !group.getUsers().isEmpty()) {
//            List<User> users = getUsersFromRepository(group.getUsers());
//            users.add(admin);
//            group.setUsers(users);
//        }

        String adminID = null;
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getDetails() != null) {
            adminID = authentication.getDetails().toString();
        }

        User admin = userRepository.findById(adminID)
        .orElseThrow(() -> new ResourceNotFoundException("Admin not found"));

        group.setAdmin(admin);

        //change this later
        List<User> users = new ArrayList<>();
        users.add(admin);
        group.setUsers(users);

        return groupRepository.save(group);
    }


    public Group updateGroup(Group updatedGroup, String groupID) throws ResourceNotFoundException, ResourceAlreadyExists {
        Group group = groupRepository.findById(groupID)
                .orElseThrow(() -> new ResourceNotFoundException("Group not found"));

        group.setName(updatedGroup.getName());
        group.setDescription(updatedGroup.getDescription());

        List<User> users = getUsersFromRepository(updatedGroup.getUsers());

        if (!users.contains(group.getAdmin())) {
            throw new ResourceAlreadyExists("You cannot remove the admin from the group!");
        }

        group.setUsers(users);
        return groupRepository.save(group);
    }

    public void deleteGroup(String id) {
        Group group = groupRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Group with this ID does not exist"));
        groupRepository.delete(group);
    }

}
