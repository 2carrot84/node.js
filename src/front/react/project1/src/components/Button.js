import React from "react";
import "../style/Button.scss";
import styled from "styled-components";

const MyButton = styled.button`
  font-size: 24px;
`;

export default function Button() {
  return <MyButton>Green</MyButton>;
}