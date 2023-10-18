package com.example.server.service;


import com.example.server.dto.BaseDTO;
import com.example.server.dto.TaskDTO;
import com.example.server.exception.ResourceNotFoundException;
import com.example.server.model.Group;
import com.example.server.model.Task;
import com.example.server.model.User;
import com.example.server.repository.GroupRepository;
import com.example.server.repository.TaskRepository;
import com.example.server.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TaskService {
    private TaskRepository taskRepository;
    private GroupRepository groupRepository;
    private UserRepository userRepository;
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

    public BaseDTO createTask(Task task, String groupID) {
        Group group = groupRepository.findById(groupID).orElseThrow(()-> new ResourceNotFoundException("Group with this ID does not exist"));
        task.setGroup(group);
        addUsersToTask(task);
        //TO DO: zapisz autora taska
        taskRepository.save(task);
        TaskDTO taskDTO = modelMapper.map(task, TaskDTO.class);
        return new BaseDTO("Task created", taskDTO);
    }


    public BaseDTO updateTask(Task task, String taskID) {
        Task taskToUpdate = taskRepository.findById(taskID).orElseThrow(()-> new ResourceNotFoundException("Task with this ID does not exist"));
        taskToUpdate.setTitle(task.getTitle());
        taskToUpdate.setDescription(task.getDescription());
        addUsersToTask(taskToUpdate);
        taskToUpdate.setStatus(task.getStatus());
        taskRepository.save(taskToUpdate);
        TaskDTO taskDTO = modelMapper.map(task, TaskDTO.class);
        return new BaseDTO("Task updated", taskDTO);

    }

    private void addUsersToTask(Task task) {
        if(task.getUsers() != null && !task.getUsers().isEmpty()){
            List<User> users = new ArrayList<>();
            for (User user : task.getUsers()){
                User u = userRepository.findById(user.getId()).orElseThrow(()-> new ResourceNotFoundException("User with this ID does not exist"));
                users.add(u);
            }
            task.setUsers(users);
        }
    }

    public ResponseEntity<Void> deleteTask(String taskID) {
        Task task = taskRepository.findById(taskID).orElseThrow(()-> new ResourceNotFoundException("Task with this ID does not exist"));
        taskRepository.delete(task);
        return ResponseEntity.noContent().build();
    }

}
