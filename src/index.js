import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
//import App from "Components/App" 이렇게 해도 작동함 .env덕분임.
//.env에서 기본적으로 src파일을 보게 만들어줌.
import "./api";

ReactDOM.render(<App />, document.getElementById("root"));
