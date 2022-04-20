import { createGlobalStyle } from 'styled-components';

interface ThemeType {
    theme: {
        palette: {
            body: string;
        };
    };
}

const GlobalStyle = createGlobalStyle<ThemeType>`
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    transition: background-color 0.3s;
    font-family: 'Raleway', sans-serif;
    background-color: ${({ theme }) => theme.palette.body};
}
`;

export default GlobalStyle;
