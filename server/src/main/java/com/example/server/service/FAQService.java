package com.example.server.service;

import com.example.server.model.FAQ;
import com.example.server.repository.FAQRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import com.example.server.exception.ResourceAlreadyExists;
import com.example.server.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FAQService {
    private FAQRepository faqRepository;

    public List<FAQ> getFAQs(Integer limit) {
        Page<FAQ> faqsPage = faqRepository.findAll(PageRequest.of(0, limit));
        return faqsPage.getContent();
    }

    public List<FAQ> getFAQs() {
        return faqRepository.findAll();
    }

    public FAQ createFAQ(FAQ faq) {
        if (faqRepository.findByQuestion(faq.getQuestion()) != null) {
            throw new ResourceAlreadyExists("FAQ with this question already exists");
        }
        faqRepository.save(faq);
        return faq;
    }

    public FAQ updateFAQ(FAQ faq, String faqID) {
        FAQ faqToUpdate = faqRepository.findById(faqID)
                .orElseThrow(() -> new ResourceNotFoundException("FAQ not found with ID: " + faqID));
        faqToUpdate.setQuestion(faq.getQuestion());
        faqToUpdate.setAnswer(faq.getAnswer());
        return faqRepository.save(faqToUpdate);
    }

    public void deleteFAQ(String faqID) {
        FAQ faqToDelete = faqRepository.findById(faqID)
                .orElseThrow(() -> new ResourceNotFoundException("FAQ not found with ID: " + faqID));

        faqRepository.delete(faqToDelete);
    }

}
