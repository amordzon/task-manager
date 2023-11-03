package com.example.server.repository;

import com.example.server.model.FAQ;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FAQRepository extends JpaRepository<FAQ, String> {
    FAQ findByQuestion(String question);
}
