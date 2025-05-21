import DisableRightClickOnImages from "@/components/layout/disable-menu-contextual"
import Footer from "@/components/layout/footer/Footer"
import LayoutWrapperHeaderDark from "@/components/layout/LayoutWrapperHeaderDark"
import SecondaryHeader from "@/components/layout/secondary-header/SecondaryHeader"
import WhatsappButton from "@/components/layout/whatsapp-button"

const Layout = ({ children }) => {

  return (
    <LayoutWrapperHeaderDark>
      <DisableRightClickOnImages />
      {children}
      <SecondaryHeader />
      <WhatsappButton />
      <Footer />
    </LayoutWrapperHeaderDark>
  )
}

export default Layout