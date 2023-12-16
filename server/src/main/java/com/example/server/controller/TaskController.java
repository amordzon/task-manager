package com.example.server.controller;

import com.example.server.dto.BaseDTO;
import com.example.server.dto.TaskDTO;
import com.example.server.exception.ResourceNotFoundException;
import com.example.server.model.Task;
import com.example.server.service.TaskService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/tasks")
@AllArgsConstructor
public class TaskController {

    private TaskService taskService;
    private ModelMapper modelMapper;
    @GetMapping
    public BaseDTO getTasks(){
        List<Task> tasks = taskService.getTasks();
        List<TaskDTO> tasksDTO = tasks.stream().map((task)-> modelMapper.map(task, TaskDTO.class)).collect(Collectors.toList());
        return new BaseDTO("Tasks info", tasksDTO);
    }

    @GetMapping("/my-upcoming-tasks")
    public BaseDTO getMyUpcomingTasks(){
        List<Task> tasks = taskService.getMyUpcomingTasks();
        List<TaskDTO> tasksDTO = tasks.stream().map((task)-> modelMapper.map(task, TaskDTO.class)).collect(Collectors.toList());
        return new BaseDTO("Tasks info", tasksDTO);
    }

    @GetMapping("/task/{taskID}")
    public BaseDTO getTask(@PathVariable String taskID) throws ResourceNotFoundException {
        Task task = taskService.getTask(taskID);
        TaskDTO taskDTO = modelMapper.map(task, TaskDTO.class);
        return new BaseDTO("Task info", taskDTO);
    }

    @PostMapping("/{groupID}")
    public BaseDTO createTask(@Valid @RequestBody Task task, @PathVariable String groupID) throws  ResourceNotFoundException{
        Task createdTask = taskService.createTask(task, groupID);
        TaskDTO taskDTO = modelMapper.map(createdTask, TaskDTO.class);
        return new BaseDTO("Task created", taskDTO);
    }

    @PutMapping("/{taskID}")
    public BaseDTO updateTask(@Valid @RequestBody Task task, @PathVariable String taskID) throws ResourceNotFoundException{
        Task updatedTask = taskService.updateTask(task, taskID);
        TaskDTO taskDTO = modelMapper.map(updatedTask, TaskDTO.class);
        return new BaseDTO("Task updated", taskDTO);
    }

    @DeleteMapping("/{taskID}")
    public ResponseEntity<Void> deleteTask(@PathVariable String taskID) throws ResourceNotFoundException{
        taskService.deleteTask(taskID);
        return ResponseEntity.noContent().build();
    }
}
