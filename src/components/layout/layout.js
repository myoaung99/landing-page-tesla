import Navigation from "./navigation";

const Layout = (props) => {
  return (
    <>
      <body className="w-full">
        <Navigation />
        <main>{props.children}</main>
      </body>
    </>
  );
};

export default Layout;
