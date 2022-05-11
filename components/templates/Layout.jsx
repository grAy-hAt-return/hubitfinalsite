import FooterSection from "../footer/FooterSection";
import Nav from "../nav/Nav";
import React from "react";

function Layout(props) {
  return (
    <div>
      <Nav />
      {props.children}
      {/* footer  */}
      <FooterSection />
    </div>
  );
}

export default Layout;
