package com.example.server.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

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

}
