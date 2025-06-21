import LayoutWrapperHeaderDark from "@/components/layout/LayoutWrapperHeaderDark"

const Layout = ({ children }) => {

  return (
    <LayoutWrapperHeaderDark>
      {children}
    </LayoutWrapperHeaderDark>
  )
}

export default Layout