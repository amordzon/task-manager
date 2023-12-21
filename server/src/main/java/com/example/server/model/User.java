package com.example.server.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="USER_ENTITY")
public class User {
    @Id
    @Column(name = "ID", length = 36)
    private String id;

    @Column(name = "EMAIL", length = 255)
    private String email;

    @Column(name="FIRST_NAME", length=255)
    private String firstName;

    @Column(name="LAST_NAME", length=255)
    private String lastName;

    @Column(name="USERNAME", length=255)
    private String username;

    @ManyToMany
    private List<Group> groups;

    @OneToMany(mappedBy = "admin", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Group> ownedGroups;


}
