import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid red;
  margin: 10px;
  border-radius: 10px;
`
const ComponentOl = styled.ol`
  display: flex;
  height: 70vh;
  justify-content: center;
  flex-wrap: wrap;
  overflow: scroll;
  &::-webkit-scrollbar{
    display: none;
  }
  >li{
    border: 1px solid green;
    margin: 10px;
    width: 40%;
    height:30%;
    border-radius: 20px;
    text-align: center;
  }
`

const Main: React.FC = () => {
  return (
    <>
      <Wrapper>
        <ComponentOl>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ComponentOl>
      </Wrapper>
    </>
  );
};
export {Main};