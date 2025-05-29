import Header from "@/components/header/Header"

const LayoutWrapperHeaderDark = ({ children }) => (
  <>
    <Header headerAlt />
    {children}
  </>
)

export default LayoutWrapperHeaderDark