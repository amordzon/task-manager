package com.example.server.service;

import com.example.server.dto.BaseDTO;
import com.example.server.dto.CommentDTO;
import com.example.server.dto.GroupDTO;
import com.example.server.exception.ResourceNotFoundException;
import com.example.server.model.Comment;
import com.example.server.model.Task;
import com.example.server.repository.CommentRepository;
import com.example.server.repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CommentService {
    private CommentRepository commentRepository;
    private TaskRepository taskRepository;
    private ModelMapper modelMapper;

    public BaseDTO getComments(String taskID) {
        Task task = taskRepository.findById(taskID).orElseThrow(()-> new ResourceNotFoundException("Task with this ID does not exist"));
        List<Comment> comments = commentRepository.findByTask(task);
        List<CommentDTO> commentsDTO = comments.stream().map((comment)-> modelMapper.map(comment, CommentDTO.class)).collect(Collectors.toList());
        return new BaseDTO("All comments related to task "+taskID, commentsDTO);
    }
}
