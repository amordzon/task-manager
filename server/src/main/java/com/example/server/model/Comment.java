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
@Setter
@Getter
@Table(name="COMMENT_ENTITY")
public class Comment {
    @Id
    @Column(name="ID")
    @UuidGenerator
    private String id;

    @ManyToOne
    private Group group;

    @ManyToOne
    private Task task;

    @OneToOne
    private User author;

    @Size(min=1, max=250,message="Body must be 1-250 characters")
    @NotBlank(message = "Comment cannot be null")
    private String body;


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
