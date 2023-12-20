package com.example.server.dto;

import com.example.server.model.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TaskDTO {
    private String id;

    private String title;

    private String description;

    private List<UserDTO> users;

    private UserDTO author;

    private Status status;

    private GroupBaseDTO group;

    private List<CommentDTO> comments;


    private LocalDateTime deadline;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
