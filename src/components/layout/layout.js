import Navigation from "./navigation";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
