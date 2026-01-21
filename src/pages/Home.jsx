import SEO from "../components/SEO";
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
      <SEO
        url="/"
        description="Breeze Fashion offers premium fashion manufacturing, OEM services, and quality apparel solutions. Based in Suzhou, China, we deliver excellence in fashion production worldwide."
      />
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
