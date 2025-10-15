import SubPageHero from "../components/basic/SubPageHero";

import ContactFormNew from "../components/contact/ContactFormNew";
import ContactMethodsGrid from "../components/contact/ContactMethodsGrid";
import TeamPreview from "../components/home/TeamPreview";
import FAQ from "../components/home/FAQ";
import FinalCTA from "../components/home/FinalCTA";

function Contact() {
  return (
    <>
      <SubPageHero
        backgroundImage="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b2e65c45b0d8c4610607e7_image.png"
        title="Contact our team"
        description="We're here to assist you with expert manufacturing guidance and tailored solutions. Connect with our team for quotes, inquiries, or support. Let's bring your apparel vision to life together."
        showButtons={false}
      />

      <ContactFormNew />
      <ContactMethodsGrid />
      <TeamPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}

export default Contact;
