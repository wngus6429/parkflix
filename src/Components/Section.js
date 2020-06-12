import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//Upcoming Movies 섹션안에 관련 영화들
//Popular Movies 섹션안에 영화들
//오늘 방영된 티비쇼 섹션 안에 관련 컨텐츠 등.
const Container = styled.div`
  :not(:last-child) {
    /*마지막 child 에게는 적용 안함. */
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
`; //movie탭의 타이틀 글씨 크게 하는거.

const Grid = styled.div`
  margin-top: 25px;
  display: grid; /*display gird는 flexbox보다 좋다 */
  grid-template-columns: repeat(auto-fill, 125px); /*컬름 넓이 */
  grid-gap: 25px;
`;

//children 은 react prop 고유의 뭐시기 인거 같군.
const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Section;
