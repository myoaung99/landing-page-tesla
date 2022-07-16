import React from "react";
import Navigation from "./navigation";

const Layout = (props) => {
    const {position} = props;
  return (
    <div>
      <Navigation position={position}/>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
