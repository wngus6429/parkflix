import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//Upcoming Movies 섹션안에 관련 영화들
//Popular Movies 섹션안에 영화들
//오늘 방영된 티비쇼 섹션 안에 관련 컨텐츠 등.
const Container = styled.div`
  :not(:last-child) {
    /*마지막 child 에게는 적용 안함. */
    margin-bottom: 58px;
  }

  @media (max-width: 640px) {
    :not(:last-child) {
      margin-bottom: 42px;
    }
  }
`;

const Title = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0;
`; //movie탭의 타이틀 글씨 크게 하는거.

const Grid = styled.div`
  margin-top: 20px;
  display: grid; /*display gird는 flexbox보다 좋다 */
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /*컬름 넓이 */
  gap: 26px 20px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px 14px;
  }
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
