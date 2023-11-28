package com.example.server.service;

import com.example.server.model.FAQ;
import com.example.server.repository.FAQRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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
        List<FAQ> faqs = faqRepository.findAll();
        return faqs;
    }

    public FAQ createFAQ(FAQ faq) {
        if (faqRepository.findByQuestion(faq.getQuestion()) != null) {
            return null;
        }
        faqRepository.save(faq);
        return faq;
    }

    public FAQ updateFAQ(FAQ faq, String faqID) {
        FAQ faqToUpdate = faqRepository.findById(faqID).orElse(null);
        if(faqToUpdate==null){
            return null;
        }
        faqToUpdate.setQuestion(faq.getQuestion());
        faqToUpdate.setAnswer(faq.getAnswer());
        faqRepository.save(faqToUpdate);
        return faqToUpdate;
    }

    public Boolean deleteFAQ(String faqID) {
        FAQ faqToDelete = faqRepository.findById(faqID).orElse(null);
        if(faqToDelete==null){
            return false;
        }
        faqRepository.delete(faqToDelete);
        return true;
    }

}
