import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    :root {
        --page-bg: #080b12;
        --surface: rgba(17, 22, 32, 0.78);
        --surface-strong: rgba(21, 27, 40, 0.94);
        --line: rgba(255, 255, 255, 0.1);
        --text: #f7f8fb;
        --muted: rgba(247, 248, 251, 0.68);
        --accent: #ff3d57;
        --accent-strong: #ffb238;
    }
    a{
        text-decoration:none;
        color:inherit; /*부모 요소에서 값을 상속하도록 지정 */
    }
    *{
        box-sizing:border-box;
    }
    html {
        min-width: 320px;
        background: var(--page-bg);
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-top:72px;
        min-width: 320px;
        min-height: 100vh;
        background:
            radial-gradient(circle at top left, rgba(255, 61, 87, 0.2), transparent 28rem),
            radial-gradient(circle at top right, rgba(255, 178, 56, 0.16), transparent 24rem),
            linear-gradient(180deg, #101522 0%, var(--page-bg) 42%);
        background-attachment: fixed;
        font-size:14px;
        color:var(--text);
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
    }
    button,
    input {
        font-family: inherit;
    }
    ::selection {
        background: rgba(255, 61, 87, 0.35);
    }
    @media (max-width: 640px) {
        body {
            padding-top: 108px;
        }
    }
`;

export default globalStyles;

//이걸 App.js에 Import함.
