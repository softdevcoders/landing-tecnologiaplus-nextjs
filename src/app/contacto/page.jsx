import getMetadata from "@/request/server/metadata/get-metadata";
import ContactSection from "@/sections/contact";

export async function generateMetadata() {
  const metadata = getMetadata('contact');
  return metadata;
}

const ContactPage = () => {

  return (
    <ContactSection />
  );
}

export default ContactPage;