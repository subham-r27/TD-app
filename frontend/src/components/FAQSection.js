import React from 'react';
import { Accordion, Container } from 'react-bootstrap'; // Import Accordion and Container
import './FAQSection.css'; // We'll create this CSS file next

function FAQSection() {
  return (
    <div className="faq-section">
      <Container> {/* Use Bootstrap Container for content alignment */}
        <h2 className="faq-section-title">Frequently asked questions</h2>

        <Accordion defaultActiveKey="0"> {/* '0' means the first item is open by default */}
          {/* FAQ Item 1 */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Think Driven?</Accordion.Header>
            <Accordion.Body>
             Think Driven is a web platform that provides insights, resources, and tools to explore the psychological impact of the brain on mental health and daily life.
            </Accordion.Body>
          </Accordion.Item>

          {/* FAQ Item 2 */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Do I need to create an account to use Think Driven?</Accordion.Header>
            <Accordion.Body>
              Most of our content is freely accessible, but creating an account gives you access to personalized features, saved resources, and exclusive content.
            </Accordion.Body>
          </Accordion.Item>

          {/* FAQ Item 3 */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Is Think Driven free to use?</Accordion.Header>
            <Accordion.Body>
              Yes, the core features and articles are free. However, we may offer premium content, courses, or advanced tools for registered users
            </Accordion.Body>
          </Accordion.Item>

          {/* FAQ Item 4 */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>Can I access Think Driven on mobile devices?</Accordion.Header>
            <Accordion.Body>
             Absolutely! The website is fully responsive and works on desktops, tablets, and smartphones for a smooth user experience.
            </Accordion.Body>
          </Accordion.Item>

          {/* FAQ Item 5 */}
          <Accordion.Item eventKey="4">
            <Accordion.Header>How often is new content published?</Accordion.Header>
            <Accordion.Body>
              We regularly update Think Driven with fresh articles, research insights, and resources to keep you informed and engaged.
            </Accordion.Body>
          </Accordion.Item>

          {/* FAQ Item 6 */}
          <Accordion.Item eventKey="5">
            <Accordion.Header>How can I contact the Think Driven team?</Accordion.Header>
            <Accordion.Body>
             You can reach us through the Contact Us page on the website, or by email at hi@thinkdriven.in
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}

export default FAQSection;