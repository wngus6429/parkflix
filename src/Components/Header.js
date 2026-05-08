import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: var(--text); /*기본 블랙이라 이걸 적어줘야 보임 */
  position: fixed; /* 스크롤 내려도 그 위치에 있음 */
  top: 0;
  left: 0;
  width: 100%;
  min-height: 72px;
  display: flex;
  align-items: center; /*세로축 에서 items의 정렬 방법을 설정, justify-content는 가로축 */
  justify-content: space-between;
  gap: 24px;
  padding: 14px 36px;
  background-color: rgba(8, 11, 18, 0.82);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(18px);
  z-index: 10; /*어느객체가 앞으로 나오고 뒤에 나올지 배치 순서를 결정하는 속성 */
  /*z-index는 position(relative, absolute, fixed)속성이 적용된 요소에서만 작동함 */
  box-shadow: 0 16px 35px rgba(0, 0, 0, 0.28);

  @media (max-width: 640px) {
    min-height: 108px;
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
    padding: 14px 18px 16px;
  }
`;

const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 0;
  white-space: nowrap;

  &::before {
    content: "";
    width: 12px;
    height: 28px;
    border-radius: 8px;
    background: linear-gradient(180deg, var(--accent), var(--accent-strong));
    box-shadow: 0 0 24px rgba(255, 61, 87, 0.45);
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  /* &:hover {
    background-color: blue;
  } */

  @media (max-width: 640px) {
    width: 100%;
    justify-content: space-between;
    overflow-x: auto;
  }
`;

const Item = styled.li`
  min-width: 92px;
  height: 38px;
  text-align: center; /*Link안에 텍스트 가운데로*/
  border-radius: 999px;
  color: ${(props) => (props.current ? "white" : "var(--muted)")};
  background: ${(props) =>
    props.current ? "linear-gradient(135deg, var(--accent), #d9293f)" : "transparent"};
  /*함수를 적는 이유는 노란색 bottom이 Movies, TV, Search 각각 클릭 한곳에만 있게 하기 위해 */
  /*밑에 노란색 공간 크기, 밑에 current가 true면 앞에꺼 false면 뒤에 색깔 transparent는 투명 */
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease; /*클릭시 아래선 효과 */
  /* &:not(:last-child) {
    margin-right: 50px; /*이거 붙임으로서 Movie TV search 간격
  } */

  &:hover {
    color: white;
    transform: translateY(-1px);
  }

  @media (max-width: 640px) {
    flex: 1;
    min-width: 0;
  }
`;

const SLink = styled(Link)`
  /*이걸로 박스안에 글씨, 위치 및 속성 설정 */
  height: 38px;
  display: flex; /*박스 클릭하면 글씨 클릭처럼 되게끔 및 아래 효과 적용을 위해*/
  align-items: center; /*세로 위치선정 */
  justify-content: center; /*가로 위치선정 */
  padding: 0 16px;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
`; //위에 import 이름 중복 방지를 위해 S를 붙임.

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Brand to="/">ParkFlix</Brand>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
//current는 boolean 타입임. 따라서 current가 true이려면 pathname이 '/' 이어야함.
//wirthRouter는 다른 컴포넌트를 감싸는 컴포넌트임.그리고 Router에 어떠한 정보를 주지
//Link 와 to 같이 쓰이니 기억하기.
