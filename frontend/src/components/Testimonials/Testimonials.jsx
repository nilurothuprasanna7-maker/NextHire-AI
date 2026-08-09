import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer @ Infosys",
    review:
      "NextHire AI completely transformed my placement preparation. The AI resume suggestions and mock interviews gave me the confidence to crack my interview.",
  },
  {
    name: "Priya Reddy",
    role: "Frontend Developer @ TCS",
    review:
      "The aptitude practice and coding challenges were amazing. Everything was available in one platform, which saved me a lot of time.",
  },
  {
    name: "Arjun Kumar",
    role: "SDE Intern @ Wipro",
    review:
      "The ATS scanner helped me improve my resume score from 62% to 94%. I finally started getting interview calls.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">

      <motion.div
        className="testimonial-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>What Our Students Say</h2>
        <p>
          Thousands of students are improving their placement preparation with
          NextHire AI.
        </p>
      </motion.div>

      <div className="testimonial-grid">

        {testimonials.map((item, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
            }}
          >
            <FaQuoteLeft className="quote" />

            <p>{item.review}</p>

            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <h3>{item.name}</h3>

            <span>{item.role}</span>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Testimonials;