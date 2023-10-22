package com.example.server.controller;

import com.example.server.dto.BaseDTO;
import com.example.server.model.Comment;
import com.example.server.service.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/task/{taskID}/comments")
@AllArgsConstructor
public class CommentController {
    private CommentService commentService;
    @GetMapping
    public BaseDTO getComments(@PathVariable String taskID){
        return commentService.getComments(taskID);
    }

    @GetMapping("/{commentID}")
    public BaseDTO getComment(@PathVariable String taskID, @PathVariable String commentID){
        return commentService.getComment(taskID, commentID);
    }

    @PostMapping
    public BaseDTO createComment(@PathVariable String taskID, @RequestBody Comment comment){
        return commentService.createComment(taskID, comment);
    }


}
