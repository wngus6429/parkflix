import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "../../Components/Message";

const Container = styled.div`
  height: calc(100vh - 50px); /*calc는 calculate를 의미한다 산수 앞뒤 스페이스 필수*/
  width: 100%;
  position: relative;
  padding: 50px;
  /*상대 크기 %를 사용 vw와 vh는 화면 크기를 기준'
  vw'및 'vh'는 일부 브라우저에서 지원되지 않을 수
   있으므로 %가 더 좋습니다. */
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px); /*이걸로 포스터 희미하게 */
  opacity: 0.5; /*이걸로 포스터 희미하게 */
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%; /*father에게width가 없으면 children에게도 없다. #6.8 11분 20초 */
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  /*이것은 Detail들어가면 왼쪽 포스터 */
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 10px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 18px;
`;

const ItemContainer = styled.div`
  margin-bottom: 10px;
`;

const Item = styled.span`
  font-size: 20px;
  color: gold;
`;

const Divider = styled.span`
  margin: 0 5px;
  font-size: 15px;
`;

const Overview = styled.p`
  font-size: 15px;
  opacity: 0.7;
  line-height: 1.5; /*글자 줄당 위, 아래 간격 */
  width: 60%;
`;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading ParkFlix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message />
  ) : (
    <Container>
      <Helmet>
        <title>{result.original_title ? result.original_title : result.original_name} ParkFlix</title>
      </Helmet>
      <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        />
        <Data>
          <Title>{result.original_title ? result.original_title : result.original_name}</Title>
          <ItemContainer>
            <Item>{result.release_date ? result.release_date : result.first_air_date}</Item>
            <Divider>🎞</Divider>
            <Item>{result.release_date ? result.runtime : result.episode_run_time}min</Item>
            <Divider>🎞</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1 ? genre.name : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  ); //위에 result.backdrop_path인 이유는 DetailContainer에서 data:result 이기 때문
//result.release_date.substring(0, 4)이런 식으로 또 날짜 자르기 가능.
//위에 release_date, first_air_date로 나뉘는 이유는 영화, TV가 각각 객체가 다르기 때문

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
