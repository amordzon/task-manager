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
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Table(name="GROUP_ENTITY")
public class Group {
    @Id
    @Column(name="ID")
    @UuidGenerator
    private String id;

    @Column(name="name", unique = true)
    @NotNull(message = "Name can not be null")
    @Size(max=20,min=3,message="Name must be between 3-20 characters")
    private String name;

    @Size(max=250,message="Description must be max 250 characters")
    @Column(name="description")
    private String description;

    @ManyToMany
    private List<User> users;

    @NotNull
    @ManyToOne
    private User admin;

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
