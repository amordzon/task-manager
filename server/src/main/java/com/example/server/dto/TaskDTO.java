package com.example.server.dto;

import com.example.server.model.Group;
import com.example.server.model.Status;
import com.example.server.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TaskDTO {
    private String id;

    private String title;

    private String description;

    private List<User> users;

    private User author;

    private Status status;

    private Group group;

    private Instant createdAt;

    private Instant updatedAt;
}
