package com.example.server.controller;

import com.example.server.dto.BaseDTO;
import com.example.server.model.FAQ;
import com.example.server.service.FAQService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/faq")
@AllArgsConstructor
public class FAQController {

    private FAQService faqService;
    @GetMapping
    public BaseDTO getFAQs(@RequestParam(required = false) Integer limit){
        if (limit != null) {
            return faqService.getFAQs(limit);
        } else {
            return faqService.getFAQs();
        }
    }

    @PostMapping
    public BaseDTO createFAQ(@RequestBody FAQ faq){
        return faqService.createFAQ(faq);
    }

    @PutMapping("/{faqID}")
    public BaseDTO updateFAQ(@RequestBody FAQ faq, @PathVariable String faqID){
        return faqService.updateFAQ(faq, faqID);
    }

    @DeleteMapping("/{faqID}")
    public ResponseEntity<Void> deleteFAQ(@PathVariable String faqID){
        return faqService.deleteFAQ(faqID);
    }
}
