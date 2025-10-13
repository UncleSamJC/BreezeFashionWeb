import SubPageHero from '../components/basic/SubPageHero';
import Mission from "../components/about/Mission";

import FinalCTA from "../components/home/FinalCTA";
import WhyChooseUs from "../components/home/WhyChooseUs";

function AboutUs() {
  return (
    <>
          <SubPageHero
        backgroundImage="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b2e65c45b0d8c4610607e7_image.png"
        title="About Us & About Us"
        description="Get the information of our company and the team"
        showButtons={true}
      />

      <Mission />

      <WhyChooseUs />
      <FinalCTA />
    </>
  );
}

export default AboutUs;
