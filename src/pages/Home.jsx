import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import OurServices from "../components/home/OurServices";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import TeamPreview from "../components/home/TeamPreview";
import FAQ from "../components/home/FAQ";
import FinalCTA from "../components/home/FinalCTA";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Testimonials />
      <OurServices />
      <WhyChooseUs />

      <FAQ />
      <FinalCTA />
    </>
  );
}

export default Home;
