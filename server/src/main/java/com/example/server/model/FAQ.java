package com.example.server.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name="FAQ_ENTITY")
public class FAQ {
    @Id
    @Column(name="ID")
    @UuidGenerator
    private String id;

    @Column(name="question", unique = true)
    @NotBlank(message = "Question cannot be null")
    @Size(max=100,min=3,message="Question must be between 3-100 characters")
    private String question;

    @Column(name="answer")
    @NotBlank(message = "Answer cannot be null")
    @Size(max=500, min=3, message = "Answer must be between 3-500 characters")
    private String answer;


    @Column(name="created_at", nullable = false, updatable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;

    @Column(name="updated_at", nullable = false)
    @UpdateTimestamp
    private LocalDateTime updatedAt;



    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
