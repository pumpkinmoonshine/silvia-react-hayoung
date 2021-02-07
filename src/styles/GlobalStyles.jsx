import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
 ${reset};
 * {
        box-sizing:border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: "Noto Sans KR", 'Noto Sans', sans-serif;
        letter-spacing: -0.3px;
        background-color: #f3f3f3;
	}

    a { 
        font-family: "Noto Sans KR", 'Noto Sans', sans-serif;
        text-decoration:none;
    }

    button {
        outline: none;
        border: none;
    }

    input:focus {
        outline:none;
    }

    input {
        &::placeholder {
            color: #aaa;
            font-weight: 100;
        }
    }

    h1 {
        font-family: "Sen", "Noto Sans KR", 'Noto Sans', sans-serif;
        word-break: keep-all;
        white-space: pre-line;
    }

    h2 {
        font-family: "Noto Sans KR", 'Noto Sans', sans-serif;
    }

    p {
        font-family: "Noto Sans KR", 'Noto Sans', sans-serif;
    }
`;
