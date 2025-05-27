import Header from "./header/Header";

const LayoutWrapperHeaderDark = ({ children }) => (
  <>
    <Header headerAlt />
    {children}
  </>
)

export default LayoutWrapperHeaderDark