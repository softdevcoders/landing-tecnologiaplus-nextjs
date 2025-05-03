import ContactForm from "./contact-form/ContactForm"
import Footer from "./footer/Footer"
import SecondaryHeader from "./secondary-header/SecondaryHeader"
import WhatsappButton from "./whatsapp-button/WhatsappButton"

const LayoutWrapper = ({ children }) => {

  return (
    <>
      {children}
      <SecondaryHeader />
      <ContactForm />
      <WhatsappButton />
      <Footer />
    </>
  )
}

export default LayoutWrapper