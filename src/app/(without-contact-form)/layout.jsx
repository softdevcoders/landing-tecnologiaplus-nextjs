import DisableRightClickOnImages from "@/components/disable-menu-contextual"
import Footer from "@/components/footer/Footer"
import LayoutWrapperHeaderDark from "@/components/layout/LayoutWrapperHeaderDark"
import WhatsappButton from "@/components/whatsapp-button"

const Layout = ({ children }) => {

  return (
    <LayoutWrapperHeaderDark>
      <DisableRightClickOnImages />
      {children}
      <WhatsappButton />
      <Footer />
    </LayoutWrapperHeaderDark>
  )
}

export default Layout