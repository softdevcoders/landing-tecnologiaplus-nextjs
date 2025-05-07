import LayoutWrapperHeaderDark from "@/components/layout/LayoutWrapperHeaderDark"
import style from "@/styles/layout.module.scss"

const Layout = ({ children }) => (
  <LayoutWrapperHeaderDark>
    <div className={style.layout_header_margin_top}>
      {children}
    </div>
  </LayoutWrapperHeaderDark>
)

export default Layout