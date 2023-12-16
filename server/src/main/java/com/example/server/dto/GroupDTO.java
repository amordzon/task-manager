package com.example.server.dto;


import com.example.server.model.User;
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

    private List<User> users;

    private User admin;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
