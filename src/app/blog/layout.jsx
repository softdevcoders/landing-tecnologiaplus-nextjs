import LayoutWrapperHeaderDarkWithContactForm from "@/components/layout/LayoutWrapperHeaderDarkWithContactForm"
import style from "@/styles/layout.module.scss"

const Layout = ({ children }) => (
  <LayoutWrapperHeaderDarkWithContactForm>
    <div className={style.layout_header_margin_top}>
      {children}
    </div>
  </LayoutWrapperHeaderDarkWithContactForm>
)

export default Layout