import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props); //이건 {pathname}가 존재하지 않음. 이건 생성자 클래스임
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"), //주소에 /movie가 있으면 true 없으면 false
    };
  } //이게 클래스를 생성하는 방법임.

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props; //history안에 push기능이 보내는기능 밑에 29번
    const { isMovie } = this.state;
    const parsedId = parseInt(id); //id가 string인걸 number로 바꾸어줌.
    if (isNaN(parsedId)) {
      return push("/"); //숫자가 아닐 경우 NaN인데 이때 home화면으로 꺼지라는거, isNaN은 함수임.
    } //리턴을 해야 함수가 끝나는것 알지?
    let result = null; //movie, tv등 뭐가 되었건 덮어씌우기 되겠지.
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId)); //const = 한거랑 같음.
        //const { data: result } 이거랑 같은거
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId)); //data 이름을 result라고 한것임
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result }); //result : result 일듯.
    }
  } //result를 만들었고 , null 값이고

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
