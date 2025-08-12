import LayoutWrapperHeaderDarkWithContactForm from "@/components/layout/LayoutWrapperHeaderDarkWithContactForm"
import VerMasWrapper from "@/components/ver-mas-productos/layout/ver-mas-wrapper/VerMasWrapper"

const Layout = ({ children }) => (
  <LayoutWrapperHeaderDarkWithContactForm> 
    <VerMasWrapper>
      {children}
    </VerMasWrapper>
  </LayoutWrapperHeaderDarkWithContactForm>
)

export default Layout