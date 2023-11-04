import React, { useState, useEffect } from "react";
import { Container, Accordion } from "react-bootstrap";
import { FAQ } from "../../types/FAQ";
import api from "../../api";

const FAQSection = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  const getFAQs = async () => {
    await api
      .get("/faq?limit=4")
      .then((response) => {
        const FAQs = response.data.data;
        console.log(FAQs);
        setFaqs(FAQs);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getFAQs();
  }, []);

  return (
    <Container className="pb-5">
      <h1 className="text-center">Frequently Asked Questions</h1>
      <Accordion defaultActiveKey="0" className="py-3">
        {faqs.length > 0 &&
          faqs.map((faq, index) => (
            <Accordion.Item eventKey={`${index}`} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
      </Accordion>
    </Container>
  );
};

export default FAQSection;
