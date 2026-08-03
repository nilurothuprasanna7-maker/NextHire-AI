import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta">

      <motion.div
        className="cta-box"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <h2>
          Ready to Start Your Placement Journey?
        </h2>

        <p>
          Build your resume, improve your skills, practice interviews,
          and get hired with NextHire AI.
        </p>

        <button className="cta-btn">
          Get Started
          <FaArrowRight />
        </button>

      </motion.div>

    </section>
  );
}

export default CTA;