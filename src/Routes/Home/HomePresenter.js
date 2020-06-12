import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 30px; /*내용물 큰 컨테이너, 위, 오른, 왼, 아래 */
`;
//section의 children(react에서)은 일반적으로 Movie에서 movie 처럼 태그 사이의 값을 받음.
//25번줄에 있는 section은 section.js를 참조로 css 적용됨.
const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => (
  <>
    <Helmet>
      <title>Movie ParkFlix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="Now Playing">
            {nowPlaying.map((movie) => (
              <Poster //모든 element는 key가 필요함. 그래서 movie에겐 id가 필요함.
                key={movie.id} //nowPlaying && nowPlaying.length > 0 && , condition이 false이면 뒤 작동 안함
                id={movie.id} //이거 있어야 주소 id 부여함 //섹션의 내용은 condition이 아니라 component고 언제나 true로 작동.
                title={movie.original_title} //여기서 children 이란 map 기능을 말하는 것임. 왜 여기 넣었냐면
                imageUrl={movie.poster_path} //이유는 우리의 섹션에서 div내부에 원하는 children을 넣을수 잇어야 해서
                rating={movie.vote_average} //now_playing 네트워크에서 보니까. 평점은 이거임.
                year={movie.release_date && movie.release_date.substring(0, 4)} //substring은 자를수 있게 함.
                isMovie={true} //위에 저렇게 && 적는 이유는 뒤쪽이 null이 되면 substring 기능 에러가 일어남
              /> //그래서 substring은 release_date가 존재할 때만 사용하도록 한다.
            ))}
          </Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title="Upcoming Movies">
            {upcoming.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average} //now_playing 네트워크에서 보니까. 평점은 이거임.
                year={movie.release_date && movie.release_date.substring(0, 4)} //substring은 자를수 있게 함.
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Movies">
            {popular.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average} //now_playing 네트워크에서 보니까. 평점은 이거임.
                year={movie.release_date && movie.release_date.substring(0, 4)} //substring은 자를수 있게 함.
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);
//위에 error는 null 아니면 text를 줄거임.
//여기가 화면을 만드는 곳임.

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcomfing: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
