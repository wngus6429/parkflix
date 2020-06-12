import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "", //검색어
    loading: false, //사용자가 단어를 가지고 검색하기를 기다리기에 디폴트 false
    error: null,
  };
  //이건 리액트의 이벤트임. 리액트 혹은 자바스크립트는 나에게 이벤트를 줌.
  handleSubmit = (event) => {
    event.preventDefault(); //검색란에 글씨 넣고 enter쳐도 새로고침, 즉 state를 잃지 않음.
    const { searchTerm } = this.state;
    //searchTerm이 빈칸이 아닌걸 체크하고 그 다음에 search 함수를 실행 시킬것임.
    if (searchTerm !== "") {
      this.searchByTerm(); //input에서 글씨 검색하고 앤터하면 이게 작동해서 검색을 시작함.
    }
  };
  //여기 event는 input에서 뭔가 글씨를 넣었을때 작동,value는 내가 넣은 글자.
  updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    //console.log(value);
    this.setState({ searchTerm: value });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true }); //검색 했으니 true 되야지
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      this.setState({ movieResults, tvResults });
    } catch (error) {
      this.setState({ error: "Can't find results" });
    } finally {
      this.setState({ loading: false });
    }
  };
  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}

//searchPresenter에서 폼을 만들고, 폼 셋업하고 onSubmit을 호출할거야. handleSubmit을 호출하기 위해
//handleSubmit은 searchByTerm을 호출하고, searchByTerm이 모든 작업들을 준비해 줄것임.
