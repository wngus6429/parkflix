import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null,
  };
  //화살표 함수 사용시 componentDidMount = async() =>{} 가능
  async componentDidMount() {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      this.setState({ topRated, popular, airingToday });
    } catch {
      this.setState({
        error: "Can't find TV information.",
      });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { topRated, popular, airingToday, loading, error } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}
//34번이 움직이고 13 componentdidmount 움직이고 밑에 setstate하게 되면 다시 render
//render 다음에 componentdidmount임, setstate 명령어가 실행되면 component를 호출하고 render를 호출
