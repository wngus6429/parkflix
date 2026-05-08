import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: calc(100vh - 72px); /*vh 요소는 높이값의 100분의 1단위 임 , 브라우저 높이 값이 900px일떄 1vh는 9px*/
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.14);
  border-top-color: var(--accent);
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

//이모지는 span으로 감싸야함. 그리고 image role 이 있어야함.
export default () => (
  <Container>
    <Spinner aria-label="Loading" />
  </Container>
);
