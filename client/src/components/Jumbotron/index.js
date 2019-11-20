import React from "react";
// import { url } from "inspector";

function Jumbotron({ children }) {
  let Background="http://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"

  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center",backgroundImage: `url(${Background})`}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
