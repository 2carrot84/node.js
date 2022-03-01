import React from "react";

// props
function MainHeader(props) {
  return <h1 data-attr={props.attr}> {props.text} </h1>;
}

export default MainHeader;