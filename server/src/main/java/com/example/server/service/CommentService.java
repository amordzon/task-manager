package com.example.server.service;

import com.example.server.exception.ResourceNotFoundException;
import com.example.server.model.Comment;
import com.example.server.model.Group;
import com.example.server.model.Task;
import com.example.server.repository.CommentRepository;
import com.example.server.repository.GroupRepository;
import com.example.server.repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CommentService {
    private CommentRepository commentRepository;
    private TaskRepository taskRepository;
    private GroupRepository groupRepository;

    public List<Comment> getComments(String taskID) {
        Task task = taskRepository.findById(taskID).orElseThrow(()-> new ResourceNotFoundException("Task with this ID does not exist"));
        return commentRepository.findByTask(task);

    }

    public Comment getComment(String taskID, String commentID) {
        Comment comment = commentRepository.findById(commentID).orElseThrow(()->new ResourceNotFoundException("This comment does not exist"));
        if (comment.getTask().getId().equals(taskID)) {
            return comment;
        } else {
            throw new ResourceNotFoundException("Comment within this task does not exist");
        }
    }

    public Comment createComment(String taskID, Comment comment) {
        Group taskGroup = groupRepository.findById(comment.getGroup().getId()).orElseThrow(()->new ResourceNotFoundException("This group does not exist"));
        Task task = taskRepository.findById(taskID).orElseThrow(()-> new ResourceNotFoundException("This task does not exist"));
        comment.setTask(task);
        comment.setGroup(taskGroup);
        return commentRepository.save(comment);
    }


    public Comment updateComment(String taskID, String commentID, Comment comment) {
        Comment commentToUpdate = commentRepository.findById(commentID).orElseThrow(()->new ResourceNotFoundException("This comment does not exist"));
        if (commentToUpdate.getTask().getId().equals(taskID)) {
            commentToUpdate.setBody(comment.getBody());
            return commentRepository.save(commentToUpdate);
        } else {
            throw new ResourceNotFoundException("Comment within this task does not exist");
        }
    }

    public void deleteComment(String taskID, String commentID) {
        Comment comment = commentRepository.findById(commentID).orElseThrow(()->new ResourceNotFoundException("This comment does not exist"));
        if (comment.getTask().getId().equals(taskID)) {
            commentRepository.delete(comment);
        } else {
            throw new ResourceNotFoundException("Comment within this task does not exist");
        }
    }

}
