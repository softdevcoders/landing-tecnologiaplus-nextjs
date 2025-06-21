import Header from "@/components/header/Header"
import DisableRightClickOnImages from "@/components/disable-menu-contextual"
import WhatsappButton from "@/components/whatsapp-button"
import Footer from "@/components/footer/Footer"

const LayoutWrapperHeaderDark = ({ children }) => (
  <>
    <Header headerAlt />
    <DisableRightClickOnImages />
    {children}
    <WhatsappButton />
    <Footer />
  </>
)

export default LayoutWrapperHeaderDark