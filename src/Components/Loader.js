import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh; /*vh 요소는 높이값의 100분의 1단위 임 , 브라우저 높이 값이 900px일떄 1vh는 9px*/
  width: 100vh;
  display: flex;
  justify-content: center;
  font-size: 50px;
  margin-top: 20px;
`;

//이모지는 span으로 감싸야함. 그리고 image role 이 있어야함.
export default () => (
  <Container>
    <span role="img" aria-label="Loading">
      🚴‍♂️
    </span>
  </Container>
);
