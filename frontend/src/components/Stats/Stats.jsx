import { motion } from "framer-motion";
import "./Stats.css";

const stats = [
  {
    number: "50K+",
    title: "Students"
  },
  {
    number: "200+",
    title: "Hiring Companies"
  },
  {
    number: "1M+",
    title: "Practice Questions"
  },
  {
    number: "98%",
    title: "Success Rate"
  }
];

function Stats() {
  return (
    <section className="stats" id="stats">

      <motion.div
        className="stats-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {stats.map((item, index) => (

          <motion.div
            key={index}
            className="stat-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >

            <h2>{item.number}</h2>

            <p>{item.title}</p>

          </motion.div>

        ))}

      </motion.div>
    </section>
  );
}

export default Stats;