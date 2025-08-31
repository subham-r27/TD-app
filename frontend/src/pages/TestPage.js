import React from 'react';
import AdBody from '../components/AdBody';
import CarouselCards from '../components/CarouselCards';
import FAQSection from '../components/FAQSection';
import Header from '../components/Header';
import ReviewFormSection from '../components/ReviewFormSection';

function TestPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Test Page - Component Integration</h1>
      <p>This page tests all the integrated components from think-driven-web-main</p>
      
      <div style={{ marginBottom: '40px' }}>
        <h2>Header Component</h2>
        <Header />
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <h2>Ad Body Component</h2>
        <AdBody />
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <h2>Carousel Cards Component</h2>
        <CarouselCards />
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <h2>FAQ Section Component</h2>
        <FAQSection />
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <h2>Review Form Section Component</h2>
        <ReviewFormSection />
      </div>
    </div>
  );
}

export default TestPage;
