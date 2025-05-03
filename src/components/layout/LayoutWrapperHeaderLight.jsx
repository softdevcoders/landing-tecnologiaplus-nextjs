const { default: Header } = require("./header/Header");

const LayoutWrapperHeaderLight = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)

export default LayoutWrapperHeaderLight