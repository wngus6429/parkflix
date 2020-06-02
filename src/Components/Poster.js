import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
//import { fas fa-star } from "@fortawesome/free-solid-svg-icons"

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px; /* 이거 안 넣으니 사진 안 나오더라. */
  background-size: cover; /* 그림사이즈가 커서 꽉 채우기 효과 넣음 */
  border-radius: 5px;
  background-position: center center;
  transition: opacity 0.1s linear; /* 포스터에 마우스 가져다 대면 페이드 효과 */
`;

const Rating = styled.span`
  bottom: 10px;
  right: 5px; /* 이걸로 오른쪽 정렬 */
  position: absolute; /*이것과 밑에 positiong:relative 연계해서 평점을 포스터에 넣음 */
  opacity: 0;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative; /* 위에 positiong:absolute랑 연계해서 포스터안에 평점 넣음 */
  &:hover {
    ${Image} {
      opacity: 0.3;
    } /*이부분으로 인해 포스터를 담은 컨테이너에 마우스 가져다 대면 희미해짐*/
    ${Rating} {
      opacity: 1;
    } /*이것과 위에 23줄 연계 */
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 4px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5); /*맨 마지막 0.5는 투명도 */
`;

// const Star = styled.span`
//   display: fiex;
//   justify-content: space-between;
//   width: 60%;
//   background: -webkit-linear-gradient(
//     left,
//     #f1c40f ${(props) => props.percenter}%,
//     #555 ${(props) => 100 - props.percenter}%
//   );
// `;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image /* 밑에 명령어는 이미지가 있으면 있는거 보여주고 없으면 내가 지정한 포스터 보여줌 */
          bgUrl={
            imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require("../assets/noPosterSmall.png")
          }
        />
        <Rating>
          {rating}/10
          <span role="img" aria-label="rating">
            ✨
          </span>
        </Rating>
      </ImageContainer>
      <Title>{title.length > 18 ? `${title.substring(0, 18)}...` : title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;

/* <Star percenter={rating * 10}>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </Star> */
