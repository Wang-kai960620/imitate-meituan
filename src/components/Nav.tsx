import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  box-shadow: 0 0 1px 1px rgba(0,0,0,0.2);
  >ol{
    display: flex;
    >li{
      width: 50%;
      text-align: center;
      margin: 10px;
      padding: 5px;
    }
  };
`;

function Nav() {
  return (
    <Wrapper>
      <ol>
        <li>
          <NavLink to='/'> 首页 </NavLink>
        </li>
        <li>
          <NavLink to='/find'>发现</NavLink>
        </li>
      </ol>
    </Wrapper>
  );
}

export {Nav};