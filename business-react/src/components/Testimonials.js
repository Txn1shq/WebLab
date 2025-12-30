import { FaStar } from "react-icons/fa";

function Testimonials() {
  const reviews = [
    {
      text:
        "Interio transformed our outdated living room into a modern, functional space that we absolutely love. Their attention to detail was exceptional.",
      name: "Sarah Johnson",
      role: "Homeowner"
    },
    {
      text:
        "The team redesigned our office space and created an environment that boosted productivity and impressed our clients. Highly professional and creative.",
      name: "Michael Chen",
      role: "Business Owner"
    },
    {
      text:
        "From the initial consultation to the final reveal, the entire process was smooth and enjoyable. They truly listened to our vision.",
      name: "Emily Rodriguez",
      role: "Homeowner"
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Clients Say</h2>
      <p className="testimonials-sub">
        Don’t just take our word for it. Here’s what our satisfied clients have to say.
      </p>

      <div className="testimonial-cards">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="testimonial-text">"{review.text}"</p>

            <h4>{review.name}</h4>
            <span>{review.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;