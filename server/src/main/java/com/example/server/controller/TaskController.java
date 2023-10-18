package com.example.server.controller;

import com.example.server.dto.BaseDTO;
import com.example.server.model.Task;
import com.example.server.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/{groupID}")
    public BaseDTO createTask(@RequestBody Task task, @PathVariable String groupID){
        return taskService.createTask(task, groupID);
    }

    @PutMapping("/{taskID}")
    public BaseDTO updateTask(@RequestBody Task task, @PathVariable String taskID){
        return taskService.updateTask(task, taskID);
    }

    @DeleteMapping("/{taskID}")
    public ResponseEntity<Void> deleteTask(@PathVariable String taskID){
        return taskService.deleteTask(taskID);
    }
}