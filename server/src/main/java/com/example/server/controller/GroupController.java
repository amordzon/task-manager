package com.example.server.controller;

import com.example.server.dto.BaseDTO;
import com.example.server.model.Group;
import com.example.server.service.GroupService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/groups")
@AllArgsConstructor

public class GroupController {
    private GroupService groupService;

    @GetMapping
    public BaseDTO getGroups(){
        return groupService.getGroups();
    }

    @GetMapping("/{id}")
    public BaseDTO getGroup(@PathVariable String id){
        return groupService.getGroup(id);
    }

    @PostMapping("/{adminID}")
    public BaseDTO createGroup(@RequestBody Group group, @PathVariable String adminID){
        return groupService.createGroup(group, adminID);
    }

    @PutMapping("/{groupID}")
    public BaseDTO updateGroup(@RequestBody Group updatedGroup, @PathVariable String groupID){
        return groupService.updateGroup(updatedGroup, groupID);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGroup(@PathVariable String id){
        return groupService.deleteGroup(id);
    }
}
