import SubPageHero from '../components/basic/SubPageHero';
import Mission from "../components/about/Mission";

import FinalCTA from "../components/home/FinalCTA";
import WhyChooseUs from "../components/home/WhyChooseUs";
import bgAbout from "../assets/images/headerimg/20251110183807_128_856.jpg"

function AboutUs() {
  return (
    <>
          <SubPageHero
        backgroundImage={bgAbout}
        title="About Breeze Fashion"
        description="Learn more about our company, our expertise, and our commitment to quality apparel manufacturing"
        showButtons={true}
      />

      <Mission />

      <WhyChooseUs />
      <FinalCTA />
    </>
  );
}

export default AboutUs;
