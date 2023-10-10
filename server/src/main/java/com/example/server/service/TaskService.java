package com.example.server.service;


import com.example.server.dto.BaseDTO;
import com.example.server.dto.TaskDTO;
import com.example.server.exception.ResourceNotFoundException;
import com.example.server.model.Task;
import com.example.server.repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TaskService {
    private TaskRepository taskRepository;
    private ModelMapper modelMapper;

    public BaseDTO getTasks() {
        List<Task> tasks = taskRepository.findAll();
        List<TaskDTO> tasksDTO = tasks.stream().map((task)-> modelMapper.map(task, TaskDTO.class)).collect(Collectors.toList());
        return new BaseDTO("Tasks info", tasksDTO);
    }

    public BaseDTO getTask(String taskID) {
        Task task = taskRepository.findById(taskID).orElseThrow(()-> new ResourceNotFoundException("Task with this ID does not exist"));
        TaskDTO taskDTO = modelMapper.map(task, TaskDTO.class);
        return new BaseDTO("Task info", taskDTO);
    }
}
