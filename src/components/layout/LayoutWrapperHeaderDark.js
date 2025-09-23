import Header from "@/components/header/Header"
import DisableRightClickOnImages from "@/components/disable-menu-contextual"
import WhatsappButton from "@/components/whatsapp-button"
import Footer from "@/components/footer/Footer"

const LayoutWrapperHeaderDark = ({ children }) => (
  <>
    <Header headerAlt />
    <main>
      <DisableRightClickOnImages />
      {children}
      <WhatsappButton />
    </main>
    <Footer />
  </>
)

export default LayoutWrapperHeaderDark