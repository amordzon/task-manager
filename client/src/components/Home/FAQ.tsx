import React, { useState, useEffect } from "react";
import { Container, Accordion } from "react-bootstrap";
import axios from "axios";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  const getFAQs = async () => {
    await axios
      .get("http://localhost:8081/faq")
      .then((response) => {
        const FAQs = response.data;
        setFaqs(FAQs);
        console.log(faqs);
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
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default FAQ;
