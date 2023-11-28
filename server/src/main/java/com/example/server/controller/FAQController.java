package com.example.server.controller;

import com.example.server.dto.BaseDTO;
import com.example.server.dto.FAQDTO;
import com.example.server.exception.ResourceAlreadyExists;
import com.example.server.exception.ResourceNotFoundException;
import com.example.server.model.FAQ;
import com.example.server.service.FAQService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/faq")
@AllArgsConstructor
public class FAQController {

    private FAQService faqService;
    private ModelMapper modelMapper;
    @GetMapping
    public BaseDTO getFAQs(@RequestParam(required = false) Integer limit){
        List<FAQ> faqs = limit != null ? faqService.getFAQs(limit) : faqService.getFAQs();
        List<FAQDTO> faqsDTO = faqs.stream().map((faq) -> modelMapper.map(faq, FAQDTO.class)).collect(Collectors.toList());
        return new BaseDTO("FAQs data", faqsDTO);
    }

    @PostMapping
    public BaseDTO createFAQ(@RequestBody FAQ faq){
        FAQ createdFaq = faqService.createFAQ(faq);
        if(createdFaq==null){
            throw new ResourceAlreadyExists("This question already exists");
        }
        FAQDTO faqDTO = modelMapper.map(createdFaq, FAQDTO.class);
        return new BaseDTO("FAQ created", faqDTO);
    }

    @PutMapping("/{faqID}")
    public BaseDTO updateFAQ(@RequestBody FAQ faq, @PathVariable String faqID){
        FAQ updatedFaq = faqService.updateFAQ(faq, faqID);
        if(updatedFaq==null){
            throw new ResourceNotFoundException("FAQ with this ID does not exist");
        }
        FAQDTO faqDTO = modelMapper.map(updatedFaq, FAQDTO.class);
        return new BaseDTO("FAQ updated", faqDTO);
    }

    @DeleteMapping("/{faqID}")
    public ResponseEntity<Void> deleteFAQ(@PathVariable String faqID){
        Boolean faqIsDeleted = faqService.deleteFAQ(faqID);
        if(faqIsDeleted==false){
            new ResourceNotFoundException("FAQ with this ID does not exist");
        }
        return ResponseEntity.noContent().build();
    }
}
