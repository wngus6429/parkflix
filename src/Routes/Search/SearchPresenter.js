import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset; /*이걸로 input 테두리를 삭제 해버림. 뒷 배경과의 조화 */
  font-size: 28px;
  width: 100%;
`;

//handlesubmit은 searchTerm과 searchs들을 찾아 그래서 만들어준 form에
//onchange 속성은 요소(element)에 변화가 생겼을때 실행되는 HTML의 이벤트 속성
//48줄. movieResults가 있다면 그리고 length를 갖고, 0보다크고 이게 true라면 섹션
const SearchPresenter = ({
  movieResults,
  tvResults,
  loading,
  searchTerm,
  handleSubmit,
  error,
  updateTerm,
}) => (
  <Container>
    <Helmet>
      <title>Search ParkFlix</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Search Movies or TV Shows..." value={searchTerm} onChange={updateTerm} />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
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
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average} //now_playing 네트워크에서 보니까. 평점은 이거임.
                year={show.first_air_date && show.first_air_date.substring(0, 4)} //substring은 자를수 있게 함.
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
        {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && (
          <Message text="Nothing found" color="#95a5a6" />
        )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
