package com.example.server.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.SourceType;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.UuidGenerator;

import java.time.Instant;

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


    @Column(name="created_at", updatable = false)
    @CreationTimestamp(source = SourceType.DB)
    private Instant createdAt;

    @Column(name="updated_at")
    @UpdateTimestamp(source = SourceType.DB)
    private Instant updatedAt;


    @PreUpdate
    protected void onUpdate() {
        updatedAt = Instant.now();
    }
}
