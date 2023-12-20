package com.example.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GroupDTO {
    private String id;

    private String name;

    private String description;

    private List<UserDTO> users;

    private UserDTO admin;

    private List<TaskBaseDTO> tasks;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
