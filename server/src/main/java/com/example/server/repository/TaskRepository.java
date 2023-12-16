package com.example.server.repository;

import com.example.server.model.Status;
import com.example.server.model.Task;
import com.example.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, String> {
    List<Task> findAllByUsersContainingAndStatusIsNotOrderByDeadlineAsc(User user, Status status);
}
