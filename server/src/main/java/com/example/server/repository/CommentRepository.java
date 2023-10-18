package com.example.server.repository;

import com.example.server.model.Comment;
import com.example.server.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, String> {
    List<Comment> findByTask(Task task);
}
