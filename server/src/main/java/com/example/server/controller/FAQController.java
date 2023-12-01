package com.example.server.controller;

import com.example.server.dto.BaseDTO;
import com.example.server.dto.FAQDTO;
import com.example.server.exception.ResourceAlreadyExists;
import com.example.server.exception.ResourceNotFoundException;
import com.example.server.model.FAQ;
import com.example.server.service.FAQService;
import jakarta.validation.Valid;
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
    public BaseDTO createFAQ(@Valid @RequestBody FAQ faq) throws ResourceAlreadyExists{
        FAQ createdFaq = faqService.createFAQ(faq);
        FAQDTO faqDTO = modelMapper.map(createdFaq, FAQDTO.class);
        return new BaseDTO("FAQ created", faqDTO);
    }

    @PutMapping("/{faqID}")
    public BaseDTO updateFAQ(@Valid @RequestBody FAQ faq, @PathVariable String faqID) throws  ResourceNotFoundException{
        FAQ updatedFaq = faqService.updateFAQ(faq, faqID);
        FAQDTO faqDTO = modelMapper.map(updatedFaq, FAQDTO.class);
        return new BaseDTO("FAQ updated", faqDTO);
    }

    @DeleteMapping("/{faqID}")
    public ResponseEntity<Void> deleteFAQ(@PathVariable String faqID) throws ResourceNotFoundException{
        faqService.deleteFAQ(faqID);
        return ResponseEntity.noContent().build();
    }
}
