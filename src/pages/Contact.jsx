import SEO from "../components/SEO";
import SubPageHero from "../components/basic/SubPageHero";

import ContactFormNew from "../components/contact/ContactFormNew";
import ContactMethodsGrid from "../components/contact/ContactMethodsGrid";
import TeamPreview from "../components/home/TeamPreview";
import FAQ from "../components/home/FAQ";
import FinalCTA from "../components/home/FinalCTA";
import contactHeaderBg from "../assets/images/headerimg/20251110183807_128_856.jpg"

function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        url="/contact"
        description="Get in touch with Breeze Fashion for quotes, inquiries, or support. Connect with our expert team for tailored manufacturing solutions. Located in Suzhou, China."
      />
      <SubPageHero
        backgroundImage={contactHeaderBg}
        title="Contact our team"
        description="We're here to assist you with expert manufacturing guidance and tailored solutions. Connect with our team for quotes, inquiries, or support. Let's bring your apparel vision to life together."
        showButtons={false}
      />

      <ContactFormNew />
      <ContactMethodsGrid />
      <FAQ />
      <FinalCTA />
    </>
  );
}

export default Contact;
