package com.example.server.service;

import com.example.server.dto.BaseDTO;
import com.example.server.dto.FAQDTO;
import com.example.server.exception.ResourceAlreadyExists;
import com.example.server.exception.ResourceNotFoundException;
import com.example.server.model.FAQ;
import com.example.server.repository.FAQRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class FAQService {
    private ModelMapper modelMapper;
    private FAQRepository faqRepository;

    public BaseDTO getFAQs(Integer limit) {
        List<FAQ> faqs = faqRepository.findAll();
        List<FAQDTO> faqsDTO = faqs.stream().limit(limit).map((faq) -> modelMapper.map(faq, FAQDTO.class)).collect(Collectors.toList());
        return new BaseDTO("FAQs data", faqsDTO);
    }

    public BaseDTO getFAQs() {
        List<FAQ> faqs = faqRepository.findAll();
        List<FAQDTO> faqsDTO = faqs.stream().map((faq) -> modelMapper.map(faq, FAQDTO.class)).collect(Collectors.toList());
        return new BaseDTO("FAQs data", faqsDTO);
    }

    public BaseDTO createFAQ(FAQ faq) {
        if (faqRepository.findByQuestion(faq.getQuestion()) != null) {
            throw new ResourceAlreadyExists("This question already exists");
        }
        faqRepository.save(faq);
        FAQDTO faqDTO = modelMapper.map(faq, FAQDTO.class);
        return new BaseDTO("FAQ created", faqDTO);
    }

    public BaseDTO updateFAQ(FAQ faq, String faqID) {
        FAQ faqToUpdate = faqRepository.findById(faqID).orElseThrow(() -> new ResourceNotFoundException("FAQ with this ID does not exist"));
        faqToUpdate.setQuestion(faq.getQuestion());
        faqToUpdate.setAnswer(faq.getAnswer());
        faqRepository.save(faqToUpdate);
        FAQDTO faqDTO = modelMapper.map(faqToUpdate, FAQDTO.class);
        return new BaseDTO("FAQ updated", faqDTO);

    }

    public ResponseEntity<Void> deleteFAQ(String faqID) {
        FAQ faqToDelete = faqRepository.findById(faqID).orElseThrow(() -> new ResourceNotFoundException("FAQ with this ID does not exist"));
        faqRepository.delete(faqToDelete);
        return ResponseEntity.noContent().build();
    }

}
