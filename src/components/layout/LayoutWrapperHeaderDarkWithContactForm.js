import Header from "@/components/header/Header"
import DisableRightClickOnImages from "@/components/disable-menu-contextual"
import WhatsappButton from "@/components/whatsapp-button"
import Footer from "@/components/footer/Footer"
import ContactForm from "@/components/contact-form/contact-form"

const LayoutWrapperHeaderDarkWithContactForm = ({ children }) => (
  <>
    <Header headerAlt />
    <DisableRightClickOnImages />
    {children}
    <ContactForm />
    <WhatsappButton />
    <Footer />
  </>
)

export default LayoutWrapperHeaderDarkWithContactForm