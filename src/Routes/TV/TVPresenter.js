import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 30px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => (
  <>
    <Helmet>
      <title>TV ParkFlix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated Shows">
            {topRated.map((tv) => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.original_name}
                imageUrl={tv.poster_path}
                rating={tv.vote_average} //now_playing 네트워크에서 보니까. 평점은 이거임.
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)} //substring은 자를수 있게 함.
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Shows">
            {popular.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average} //now_playing 네트워크에서 보니까. 평점은 이거임.
                year={show.first_air_date && show.first_air_date.substring(0, 4)} //substring은 자를수 있게 함.
              />
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title="Airing Today">
            {airingToday.map((today) => (
              <Poster
                key={today.id}
                id={today.id}
                title={today.original_name}
                imageUrl={today.poster_path}
                rating={today.vote_average} //now_playing 네트워크에서 보니까. 평점은 이거임.
                year={today.first_air_date && today.first_air_date.substring(0, 4)} //substring은 자를수 있게 함.
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
//if topRated exists AND topRate is longer than 0 SHOW topRated.map()
//The last && is the one that will show up!
//condition && condition && topRated.map() (true)
//자바스크립트 표현 if(topRated && topRated.length){topRated.map(show => show.name)}

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
