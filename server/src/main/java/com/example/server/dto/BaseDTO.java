package com.example.server.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BaseDTO {
    private final boolean success=true;
    private String message;
    private Object data;
}
