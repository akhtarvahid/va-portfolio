import { useRef, useEffect } from 'react';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      quote: "Exceptional attention to detail and problem-solving skills.",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      quote: "Outstanding code quality and architecture decisions.",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      quote: "Understands both technical and design perspectives perfectly.",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Engineering Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      quote: "Consistently delivers high-quality work under tight deadlines.",
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Founder",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face",
      quote: "Transformed our vision into reality with clean, maintainable code.",
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Senior Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      quote: "Incredible technical skills combined with great communication.",
    },
    {
      id: 7,
      name: "Michael Brown",
      role: "Tech Lead",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=80&h=80&fit=crop&crop=face",
      quote: "Brought innovative solutions that improved our entire workflow.",
    },
    {
      id: 8,
      name: "Lisa Wang",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face",
      quote: "Reliable, professional, and always exceeds expectations.",
    },
    {
      id: 9,
      name: "James Wilson",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?w=80&h=80&fit=crop&crop=face",
      quote: "Excellent collaboration skills and deep technical expertise.",
    }
  ];

  const scrollerRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    scrollerRefs.forEach((scrollerRef, index) => {
      if (!scrollerRef.current) return;

      const scroller: any = scrollerRef.current;
      const scrollerInner = scroller.querySelector('.testimonials-scroller-inner');
      
      // Duplicate content for seamless loop
      const content = Array.from(scrollerInner.children);
      content.forEach((item: any) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute('aria-hidden', 'true');
        scrollerInner.appendChild(duplicatedItem);
      });

      // Different speeds for each row
      const speeds = ['35s', '40s', '45s'];
      scrollerInner.style.animationDuration = speeds[index];
    });
  }, []);

  // Split testimonials into 3 rows
  const rows = [
    testimonials.slice(0, 3),
    testimonials.slice(3, 6),
    testimonials.slice(6, 9)
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">05.</span>
          Testimonials
        </h2>
        
        <div className="testimonials-multirow-wrapper">
          {rows.map((rowTestimonials, rowIndex) => (
            <div 
              key={rowIndex}
              ref={scrollerRefs[rowIndex]}
              className="testimonials-scroller"
              data-direction={rowIndex % 2 === 0 ? "left" : "right"}
            >
              <div className="testimonials-scroller-inner">
                {rowTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="testimonial-card">
                    <div className="testimonial-content">
                      <div className="testimonial-header">
                        <div className="testimonial-image">
                          <img src={testimonial.image} alt={testimonial.name} />
                        </div>
                        <div className="testimonial-author">
                          <h4 className="author-name">{testimonial.name}</h4>
                          <p className="author-role">{testimonial.role}</p>
                        </div>
                      </div>
                      <blockquote className="testimonial-quote">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;