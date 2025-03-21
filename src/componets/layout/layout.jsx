import Footer_f from "../footer/footer.jsx";
import Header_n from "../navigation/nav.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <div className="Header_main">
        <Header_n />
        <div className="main_layout">{children}</div>
        <Footer_f />
      </div>
    </>
  );    
};
export default Layout;
