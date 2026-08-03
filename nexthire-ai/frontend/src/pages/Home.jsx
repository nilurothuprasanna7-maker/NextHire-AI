import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Stats from "../components/Stats/Stats";
import Workflow from "../components/Workflow/Workflow";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Workflow />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;