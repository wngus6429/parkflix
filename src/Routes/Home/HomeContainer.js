import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class extends React.Component {
  // componentWillMount() {
  //   console.log("componentWillMount 확인");
  // }
  state = { nowPlaying: null, upcoming: null, popular: null, error: null, loading: true };
  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying }, //뒤에 nowPlaying이거는 이름 변수명 지정.
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      this.setState({ nowPlaying, upcoming, popular }); //nowPlaying:nowPlaying
      // const nowPlaying = await moviesApi.nowPlaying();
      // console.log(nowPlaying);
      //위의 예는 moviesApi.js의 nowPlaying를 불러와서 data안의 results 데이터를 nowPlaying이름으로 활용
    } catch (error) {
      this.setState({ error: "Can't find Movie information" });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    //console.log(this.state);
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

// export default class extends React.Component {
//   state = { nowPlaying: null, upcoming: null, popular: null, error: null, loading: true };
//   async componentDidMount() {
//     try {
//       const {
//         data: { results: nowPlaying }, //뒤에 nowPlaying이거는 이름 변수명 지정.
//       } = await moviesApi.nowPlaying();
//       const {
//         data: { results: upcoming },
//       } = await moviesApi.upcoming();
//       const {
//         data: { results: popular },
//       } = await moviesApi.popular;
//       this.setState({ nowPlaying, upcoming, popular }); //nowPlaying:nowPlaying
//       // const nowPlaying = await moviesApi.nowPlaying();
//       // console.log(nowPlaying);
//     } catch (error) {
//       this.setState({ error: "Can't find Movie information" });
//     } finally {
//       this.setState({ loading: false });
//     }
//   }
