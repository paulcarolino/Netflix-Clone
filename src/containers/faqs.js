import React from "react";
import faqsData from "../fixtures/faqs.json";
import { Accordion, OptForm } from "../components";

export function AccordionContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Ask Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>Try it Now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your Email to create or restart your membership.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
