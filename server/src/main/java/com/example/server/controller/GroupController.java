package com.example.server.controller;

import com.example.server.dto.BaseDTO;
import com.example.server.dto.GroupDTO;
import com.example.server.exception.ResourceAlreadyExists;
import com.example.server.exception.ResourceNotFoundException;
import com.example.server.model.Group;
import com.example.server.service.GroupService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/groups")
@AllArgsConstructor

public class GroupController {
    private GroupService groupService;
    private ModelMapper modelMapper;

    @GetMapping
    public BaseDTO getGroups(){
        List<Group> groups = groupService.getGroups();
        List<GroupDTO> groupsDTO = groups.stream().map((group)-> modelMapper.map(group, GroupDTO.class)).collect(Collectors.toList());
        return new BaseDTO("Groups info", groupsDTO);
    }

    @GetMapping("/{id}")
    public BaseDTO getGroup(@PathVariable String id) throws ResourceNotFoundException {
        Group group = groupService.getGroup(id);
        GroupDTO groupDTO = modelMapper.map(group, GroupDTO.class);
        return new BaseDTO("Group info", groupDTO);
    }


    @PostMapping("/{adminID}")
    public BaseDTO createGroup(@RequestBody Group group, @PathVariable String adminID) throws ResourceNotFoundException {
        Group createdGroup = groupService.createGroup(group, adminID);
        GroupDTO groupDTO = modelMapper.map(createdGroup, GroupDTO.class);
        return new BaseDTO("Group created", groupDTO);
    }

    @PutMapping("/{groupID}")
    public BaseDTO updateGroup(@RequestBody Group updatedGroup, @PathVariable String groupID) throws ResourceNotFoundException, ResourceAlreadyExists {
        Group groupUpdated = groupService.updateGroup(updatedGroup, groupID);
        GroupDTO groupDTO = modelMapper.map(groupUpdated, GroupDTO.class);
        return new BaseDTO("Group updated", groupDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGroup(@PathVariable String id) throws ResourceNotFoundException{
        groupService.deleteGroup(id);
        return ResponseEntity.noContent().build();
    }
}
