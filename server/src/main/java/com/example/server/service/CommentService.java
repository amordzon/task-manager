package com.example.server.service;

import com.example.server.dto.BaseDTO;
import com.example.server.dto.CommentDTO;
import com.example.server.dto.GroupDTO;
import com.example.server.exception.ResourceNotFoundException;
import com.example.server.model.Comment;
import com.example.server.model.Group;
import com.example.server.model.Task;
import com.example.server.repository.CommentRepository;
import com.example.server.repository.GroupRepository;
import com.example.server.repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CommentService {
    private CommentRepository commentRepository;
    private TaskRepository taskRepository;
    private GroupRepository groupRepository;
    private ModelMapper modelMapper;

    public BaseDTO getComments(String taskID) {
        Task task = taskRepository.findById(taskID).orElseThrow(()-> new ResourceNotFoundException("Task with this ID does not exist"));
        List<Comment> comments = commentRepository.findByTask(task);
        List<CommentDTO> commentsDTO = comments.stream().map((comment)-> modelMapper.map(comment, CommentDTO.class)).collect(Collectors.toList());
        return new BaseDTO("All comments related to task "+taskID, commentsDTO);
    }

    public BaseDTO getComment(String taskID, String commentID) {
        Comment comment = commentRepository.findById(commentID).orElseThrow(()->new ResourceNotFoundException("This comment does not exist"));
        if (comment.getTask().getId().equals(taskID)) {
            CommentDTO commentDTO = modelMapper.map(comment, CommentDTO.class);
            return new BaseDTO("Comment info", commentDTO);
        } else {
            throw new ResourceNotFoundException("Comment within this task does not exist");
        }
    }

    public BaseDTO createComment(String taskID, Comment comment) {
        Group taskGroup = groupRepository.findById(comment.getGroup().getId()).orElseThrow(()->new ResourceNotFoundException("This group does not exist"));
        Task task = taskRepository.findById(taskID).orElseThrow(()-> new ResourceNotFoundException("This task does not exist"));
        comment.setTask(task);
        comment.setGroup(taskGroup);
        commentRepository.save(comment);
        CommentDTO commentDTO = modelMapper.map(comment, CommentDTO.class);
        return new BaseDTO("Comment created", commentDTO);
    }

    public ResponseEntity<Void> deleteComment(String taskID, String commentID) {
        Comment comment = commentRepository.findById(commentID).orElseThrow(()->new ResourceNotFoundException("This comment does not exist"));
        if (comment.getTask().getId().equals(taskID)) {
            commentRepository.delete(comment);
            return ResponseEntity.noContent().build();
        } else {
            throw new ResourceNotFoundException("Comment within this task does not exist");
        }
    }

    public BaseDTO updateComment(String taskID, String commentID, Comment comment) {
        Comment commentToUpdate = commentRepository.findById(commentID).orElseThrow(()->new ResourceNotFoundException("This comment does not exist"));
        if (commentToUpdate.getTask().getId().equals(taskID)) {
            commentToUpdate.setBody(comment.getBody());
            CommentDTO commentDTO = modelMapper.map(commentToUpdate, CommentDTO.class);
            return new BaseDTO("Comment updated", commentDTO);
        } else {
            throw new ResourceNotFoundException("Comment within this task does not exist");
        }
    }
}
