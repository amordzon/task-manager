package com.example.server.service;


import com.example.server.exception.ResourceNotFoundException;
import com.example.server.model.Group;
import com.example.server.model.Status;
import com.example.server.model.Task;
import com.example.server.model.User;
import com.example.server.repository.GroupRepository;
import com.example.server.repository.TaskRepository;
import com.example.server.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class TaskService {
    private TaskRepository taskRepository;
    private GroupRepository groupRepository;
    private UserRepository userRepository;

    public List<Task> getTasks() {
        return taskRepository.findAll();
    }

    public Task getTask(String taskID) {
        return taskRepository.findById(taskID).orElseThrow(()-> new ResourceNotFoundException("Task with this ID does not exist"));
    }


    public List<Task> getMyUpcomingTasks() {
        String userID = null;
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getDetails() != null) {
            userID = authentication.getDetails().toString();
        }
        User user = userRepository.findById(userID).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        return taskRepository.findAllByUsersContainingAndStatusIsNotOrderByDeadlineAsc(user, Status.COMPLETED);
    }

    public Task createTask(Task task, String groupID) {
        Group group = groupRepository.findById(groupID).orElseThrow(()-> new ResourceNotFoundException("Group with this ID does not exist"));
        task.setGroup(group);
        addUsersToTask(task);
        //TO DO: zapisz autora taska
        return taskRepository.save(task);
    }


    public Task updateTask(Task task, String taskID) {
        Task taskToUpdate = taskRepository.findById(taskID).orElseThrow(()-> new ResourceNotFoundException("Task with this ID does not exist"));
        taskToUpdate.setTitle(task.getTitle());
        taskToUpdate.setDescription(task.getDescription());
        addUsersToTask(taskToUpdate);
        taskToUpdate.setStatus(task.getStatus());
        taskToUpdate.setDeadline(task.getDeadline());
        return taskRepository.save(taskToUpdate);
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

    public void deleteTask(String taskID) {
        Task task = taskRepository.findById(taskID).orElseThrow(()-> new ResourceNotFoundException("Task with this ID does not exist"));
        taskRepository.delete(task);
    }

}
