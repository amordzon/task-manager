package com.example.server.dto;


import com.example.server.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentDTO {
    private String id;

    private User author;

    private String body;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
