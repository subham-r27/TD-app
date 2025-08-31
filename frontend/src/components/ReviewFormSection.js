import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ReviewFormSection.css'; // We'll create this CSS file next

function ReviewFormSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle the submission of the review,
    // e.g., send it to a server or store it.
    console.log("Review submitted!");
    // You might clear the form or show a success message here
  };

  return (
    <div className="review-form-section-wrapper">
      <Container>
        <div className="review-form-card"> {/* This div acts as the light gray card */}
          <Row className="align-items-center">
            {/* Left Column: Text Content */}
            <Col lg={6} md={12} className="review-form-text">
              <h2 className="review-form-title">Share Your Experience</h2>
              <p className="review-form-description">
                We'd love to hear your thoughts! Please leave your valuable review to help us improve.
              </p>
            </Col>

            {/* Right Column: Form Content */}
            <Col lg={6} md={12} className="review-form-fields">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUserReview">
                  <Form.Label className="review-form-label">Your Review *</Form.Label>
                  <Form.Control
                    as="textarea" // Use textarea for multi-line review
                    rows={4} // Number of visible rows
                    placeholder="Enter your review here..."
                    required
                    className="review-form-input"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="submit-review-button">
                  Submit Review
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default ReviewFormSection;