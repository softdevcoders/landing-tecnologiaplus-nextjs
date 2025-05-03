const { default: Header } = require("./header/Header");
import altStyles from "./header/HeaderAlt.module.scss";

const LayoutWrapperHeaderDark = ({ children }) => (
  <>
    <Header 
      customStyles={{
        header: altStyles.altHeader,
        phoneBtn: altStyles.altPhoneBtn,
        searchIcon: altStyles.altSearchIcon,
      }}
    />
    {children}
  </>
)

export default LayoutWrapperHeaderDark