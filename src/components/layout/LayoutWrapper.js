import ContactForm from "@/components/contact-form/contact-form"
import DisableRightClickOnImages from "@/components/disable-menu-contextual"
import Footer from "@/components/footer/Footer"
import WhatsappButton from "@/components/whatsapp-button"

const LayoutWrapper = ({ children }) => {

  return (
    <>
      <DisableRightClickOnImages />
      {children}
      <ContactForm />
      <WhatsappButton />
      <Footer />
    </>
  )
}

export default LayoutWrapper