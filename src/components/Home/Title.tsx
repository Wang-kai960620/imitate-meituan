import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  background: #ffce00;
  padding: 10px;
  >ol{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Input = styled.input`
  width: 60vw;
  border: none;
  border-radius: 20px;
  padding: 5px;
  line-height: 15px;
  outline: none;
`
const Title: React.FC = () => {
  return (
    <Wrapper>
      <ol>
        <li>
          杭州
        </li>
        <li>
          <Input type="text" placeholder='请在这里输入地址'/>
        </li>
        <li>
          定位
        </li>
      </ol>
    </Wrapper>
  );
};

export {Title};