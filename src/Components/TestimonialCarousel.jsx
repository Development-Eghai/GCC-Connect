import React, { useState } from 'react';
import Icons from 'Utils/Icons';

const testimonials = [
  {
    text: "They were professionals and made the right changes and adjustments to align project team with our culture and needs. They believe that our financial goals are more than a number and go from dreaming to doing.",
    author: "Sami Wade Sr",
    company: "Alliance Inc",
  },
  {
    text: "The team showed exceptional dedication and delivered exactly what was promised. Their expertise in the field is unmatched.",
    author: "Jane Doe",
    company: "Tech Solutions",
  },
  {
    text: "Their service quality and timely delivery exceeded our expectations. We highly recommend them!",
    author: "John Smith",
    company: "Finance Hub",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { text, author, company } = testimonials[currentIndex];

  return (
    <section className="testimonial-section">
        <div className='container mt-5 mb-5'>
        <div className="testimonial-content">
        <h4>What our customers feel about our services!</h4>
        <p className="testimonial-text">{text}</p>
        <div className="testimonial-author">
          <button onClick={prevTestimonial} className="nav-button">
            ←
          </button>
          <div>
            <p className="author-name">{author}</p>
            <p className="author-company">{company}</p>
          </div>
          <button onClick={nextTestimonial} className="nav-button">
            →
          </button>
        </div>
      </div>
      <div className="testimonial-image">
        <div className="image-placeholder">{Icons.TalentAcquisitonIcon}</div>
      </div>

        </div>
      
    </section>
  );
};

export default TestimonialCarousel;
