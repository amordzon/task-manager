package com.example.server.model;

import jakarta.persistence.*;
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
    @NotNull
    @Column(name="title")
    private String title;

    @Size(max=250, message="Description must be max 250 characters")
    @Column(name="description")
    private String description;

    @OneToMany
    private List<User> users;

    @OneToOne
    private User author;

    @ManyToOne
    private Group group;

    @Enumerated(EnumType.STRING)
    @Column(name="status")
    private Status status;

    @OneToMany
    private List<Comment> comments;

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
