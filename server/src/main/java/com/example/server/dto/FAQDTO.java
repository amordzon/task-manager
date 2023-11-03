package com.example.server.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FAQDTO {
    private String id;
    private String question;
    private String answer;

    private Instant createdAt;

    private Instant updatedAt;

}
