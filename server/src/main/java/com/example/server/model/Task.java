package com.example.server.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="TASK_ENTITY")
public class Task {
    @Id
    @Column(name="ID")
    @UuidGenerator
    private String id;


    @Size(max=30,message="Title must be max 30 characters")
    @NotBlank(message = "Title cannot be null")
    @Column(name="title")
    private String title;

    @Size(max=250, message="Description must be max 250 characters")
    @Column(name="description")
    private String description;

    @OneToMany
    private List<User> users;

    @ManyToOne
    private User author;

    @ManyToOne
    private Group group;

    @Enumerated(EnumType.STRING)
    @Column(name="status")
    private Status status;

    @OneToMany(cascade= CascadeType.REMOVE, orphanRemoval = true)
    private List<Comment> comments;

    @Column(name="deadline")
    private LocalDateTime deadline;

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
