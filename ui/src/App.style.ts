import { createGlobalStyle } from 'styled-components';

interface ThemeType {
    theme: {
        palette: {
            body: string;
            scrollBar: string;
            scrollBarHover: string;
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
    font-size: 55%;
}

body {
    transition: background-color 0.3s;
    font-family: 'Raleway', sans-serif;
    background-color: ${({ theme }) => theme.palette.body};
}

::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.palette.body}; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.palette.scrollBar}; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.palette.scrollBarHover}; 
}

.tippy-content{
  word-wrap: break-word;
}

@media (max-width: 1200px) {
  html {
    font-size: 52.5%;
  }
}

@media (max-width: 900px) {
  html {
    font-size: 50%;
  }
}

@media (max-width: 600px) {
  html {
    font-size: 45%;
  }
}

@media (max-width: 400px) {
  html {
    font-size: 42.5%;
  }
}

@media (max-width: 300px) {
  html {
    font-size: 40%;
  }
}
`;

export default GlobalStyle;
