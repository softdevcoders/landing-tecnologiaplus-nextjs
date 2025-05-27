import ContactForm from "./contact-form/ContactForm"
import DisableRightClickOnImages from "./disable-menu-contextual"
import Footer from "./footer/Footer"
import SecondaryHeader from "./secondary-header/SecondaryHeader"
import WhatsappButton from "./whatsapp-button"

const LayoutWrapper = ({ children }) => {

  return (
    <>
      <DisableRightClickOnImages />
      {children}
      {/* <SecondaryHeader /> */}
      <ContactForm />
      <WhatsappButton />
      <Footer />
    </>
  )
}

export default LayoutWrapper