package com.example.server.controller;

import com.example.server.dto.BaseDTO;
import com.example.server.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tasks")
@AllArgsConstructor
public class TaskController {

    private TaskService taskService;
    @GetMapping
    public BaseDTO getTasks(){
        return taskService.getTasks();
    }

    @GetMapping("/{taskID}")
    public BaseDTO getTask(@PathVariable String taskID){
        return taskService.getTask(taskID);
    }
}
