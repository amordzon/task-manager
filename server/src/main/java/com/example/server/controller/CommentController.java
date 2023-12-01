package com.example.server.controller;

import com.example.server.dto.BaseDTO;
import com.example.server.dto.CommentDTO;
import com.example.server.exception.ResourceNotFoundException;
import com.example.server.model.Comment;
import com.example.server.service.CommentService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/task/{taskID}/comments")
@AllArgsConstructor
public class CommentController {
    private CommentService commentService;
    private ModelMapper modelMapper;

    @GetMapping
    public BaseDTO getComments(@PathVariable String taskID) throws ResourceNotFoundException {
        List<Comment> comments = commentService.getComments(taskID);
        List<CommentDTO> commentsDTO = comments.stream().map((comment)-> modelMapper.map(comment, CommentDTO.class)).collect(Collectors.toList());
        return new BaseDTO("All comments related to task "+taskID, commentsDTO);
    }

    @GetMapping("/{commentID}")
    public BaseDTO getComment(@PathVariable String taskID, @PathVariable String commentID) throws ResourceNotFoundException{
        Comment comment = commentService.getComment(taskID, commentID);
        CommentDTO commentDTO = modelMapper.map(comment, CommentDTO.class);
        return new BaseDTO("Comment info", commentDTO);
    }

    @PostMapping
    public BaseDTO createComment(@PathVariable String taskID, @Valid @RequestBody Comment comment) throws ResourceNotFoundException{
        Comment createdComment = commentService.createComment(taskID, comment);
        CommentDTO commentDTO = modelMapper.map(createdComment, CommentDTO.class);
        return new BaseDTO("Comment created", commentDTO);
    }

    @PutMapping("/{commentID}")
    public BaseDTO updateComment(@PathVariable String taskID, @PathVariable String commentID, @Valid @RequestBody Comment comment) throws ResourceNotFoundException{
        Comment updatedComment = commentService.updateComment(taskID, commentID, comment);

        CommentDTO commentDTO = modelMapper.map(updatedComment, CommentDTO.class);
        return new BaseDTO("Comment updated", commentDTO);
    }

    @DeleteMapping("/{commentID}")
    public ResponseEntity<Void> deleteComment(@PathVariable String taskID, @PathVariable String commentID) throws ResourceNotFoundException{
        commentService.deleteComment(taskID, commentID);

        return ResponseEntity.noContent().build();
    }

}
