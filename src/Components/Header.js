import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white; /*기본 블랙이라 이걸 적어줘야 보임 */
  font-size: 20px;
  position: fixed; /* 스크롤 내려도 그 위치에 있음 */
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center; /*세로축 에서 items의 정렬 방법을 설정, justify-content는 가로축 */
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10; /*어느객체가 앞으로 나오고 뒤에 나올지 배치 순서를 결정하는 속성 */
  /*z-index는 position(relative, absolute, fixed)속성이 적용된 요소에서만 작동함 */
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
  /* &:hover {
    background-color: blue;
  } */
`;

const Item = styled.li`
  width: 100px;
  height: 50px;
  text-align: center; /*Link안에 텍스트 가운데로*/
  border-bottom: 3px solid ${(props) => (props.current ? "gold" : "transparent")};
  /*함수를 적는 이유는 노란색 bottom이 Movies, TV, Search 각각 클릭 한곳에만 있게 하기 위해 */
  /*밑에 노란색 공간 크기, 밑에 current가 true면 앞에꺼 false면 뒤에 색깔 transparent는 투명 */
  transition: border-bottom 0.3s ease-in-out; /*클릭시 아래선 효과 */
  /* &:not(:last-child) {
    margin-right: 50px; /*이거 붙임으로서 Movie TV search 간격
  } */
`;

const SLink = styled(Link)`
  /*이걸로 박스안에 글씨, 위치 및 속성 설정 */
  height: 50px;
  display: flex; /*박스 클릭하면 글씨 클릭처럼 되게끔 및 아래 효과 적용을 위해*/
  align-items: center; /*세로 위치선정 */
  justify-content: center; /*가로 위치선정 */
`; //위에 import 이름 중복 방지를 위해 S를 붙임.

export default withRouter(({ location: { pathname } }) => (
  <Header>
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
