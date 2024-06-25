import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    input {
        text-decoration: none;
        outline: none;
    }

    body {
        margin-top: 65px;
        background: #EFEFEF;
    }
`