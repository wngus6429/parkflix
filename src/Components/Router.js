import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from "Components/Header";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
//Router는 오직 하나의 child만 가질 수 있다.
//switch는 렌더할때 오직 한개의 Route만 render한다.
//<Route path="/tv/popular" render={() => <h1>Popular</h1>} />
//redirect는 위에 주소들 중에서 아무것도 맞는게 없으면 어느 페이지든 받아서 /로 보내주는것.
