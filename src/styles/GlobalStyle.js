import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --deep-blue: #002b5b;
        --bright-coral: #ff6b6b;
        --light-pink: #efd5ed;
        --lavender: #b095d4;
        --soft-white: #f5f5f5;
        --gray-tone: #777; // Added a gray tone for text
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Poppins', sans-serif;
        background-color: var(--soft-white);
        color: var(--deep-blue);
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
    }
    p, span {
        font-family: 'Quicksand', sans-serif;
        font-weight: normal;
    }
`;
