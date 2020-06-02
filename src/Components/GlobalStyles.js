import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit; /*부모 요소에서 값을 상속하도록 지정 */
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-top:50px;
        background-color:rgba(20, 20, 20, 1); /*거의 블랙*/
        font-size:12px;
        color:white;
    }
`;

export default globalStyles;

//이걸 App.js에 Import함.
