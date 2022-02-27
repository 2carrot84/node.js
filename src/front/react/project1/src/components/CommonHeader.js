import React from "react";

function MainHeader() {
  // [상태 데이터, 상태를 위한 Setter 함수]
  const [text, setClick] = React.useState("Hello, World!");
  // setClickState(true);
  // console.log(click);
  return (
    <h1 onClick={() => {setClick("Bye World!!")}}>{text}</h1>
  );
}

export default MainHeader;