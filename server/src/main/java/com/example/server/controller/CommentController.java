package com.example.server.controller;

import com.example.server.dto.BaseDTO;
import com.example.server.service.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/task/{taskID}/comments")
@AllArgsConstructor
public class CommentController {
    private CommentService commentService;
    @GetMapping
    public BaseDTO getComments(@PathVariable String taskID){
        return commentService.getComments(taskID);
    }
}
