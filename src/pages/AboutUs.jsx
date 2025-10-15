import SubPageHero from '../components/basic/SubPageHero';
import Mission from "../components/about/Mission";

import FinalCTA from "../components/home/FinalCTA";
import WhyChooseUs from "../components/home/WhyChooseUs";

function AboutUs() {
  return (
    <>
          <SubPageHero
        backgroundImage="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b2e65c45b0d8c4610607e7_image.png"
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
