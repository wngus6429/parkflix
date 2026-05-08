import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "../../Components/Message";

const Container = styled.div`
  min-height: calc(100vh - 72px); /*calc는 calculate를 의미한다 산수 앞뒤 스페이스 필수*/
  width: 100%;
  position: relative;
  padding: 54px 36px 72px;
  /*상대 크기 %를 사용 vw와 vh는 화면 크기를 기준'
  vw'및 'vh'는 일부 브라우저에서 지원되지 않을 수
   있으므로 %가 더 좋습니다. */

  @media (max-width: 640px) {
    min-height: calc(100vh - 108px);
    padding: 24px 18px 48px;
  }
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
  filter: blur(4px); /*이걸로 포스터 희미하게 */
  opacity: 0.28; /*이걸로 포스터 희미하게 */
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(8, 11, 18, 0.94), rgba(8, 11, 18, 0.68)),
      linear-gradient(180deg, rgba(8, 11, 18, 0.2), var(--page-bg));
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  max-width: 1180px;
  margin: 0 auto;
  width: 100%; /*father에게width가 없으면 children에게도 없다. #6.8 11분 20초 */
  position: relative;
  z-index: 1;
  min-height: calc(100vh - 198px); /*이거 안 넣어서 poster.path 사진 안 나옴 */

  @media (max-width: 760px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;
    min-height: auto;
  }
`;

const Cover = styled.div`
  /*이것은 Detail들어가면 왼쪽 포스터 */
  flex: 0 0 min(32vw, 340px);
  width: min(32vw, 340px);
  aspect-ratio: 2 / 3;
  background-image: ${(props) => (props.bgImage ? `url(${props.bgImage})` : "none")};
  background-position: center center;
  background-size: cover;
  border-radius: 8px;
  border: 1px solid var(--line);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.42);

  @media (max-width: 760px) {
    width: min(72vw, 280px);
    flex-basis: auto;
  }
`;

const Data = styled.div`
  flex: 1;
  min-width: 0;
  max-width: 760px;
`;

const Title = styled.h1`
  font-size: 48px; /*h1으로 안하고 span으로 하면 밑에 margin 안 먹힘 */
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: 0;
  margin-bottom: 20px;

  @media (max-width: 760px) {
    font-size: 34px;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-bottom: 22px;
`;

const Item = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid var(--line);
  color: var(--accent-strong);
  font-size: 14px;
  font-weight: 700;
`;

const Divider = styled.span`
  display: none;
`;

const Overview = styled.p`
  color: var(--muted);
  font-size: 16px;
  line-height: 1.75; /*글자 줄당 위, 아래 간격 */
  width: min(100%, 680px);
`;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading ParkFlix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? ( //여기서 에러 처리까지 한다.
    <Message text={error} color="#ff3d57" />
  ) : (
    <Container>
      <Helmet>
        <title>{result.original_title ? result.original_title : result.original_name} ParkFlix</title>
      </Helmet>
      <Backdrop
        bgImage={
          result.backdrop_path ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` : null
        }
      />
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
            <Item>{result.runtime ? result.runtime : result.episode_run_time}min</Item>
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
//115줄에 끝에 / 안 붙이면 싹다 붙어있음.
DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
