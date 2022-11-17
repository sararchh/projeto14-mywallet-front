import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap');

:root{
  --background:  #8C11BE;
  --purple: #A328D6;

  --white: #FFFFFF;
  --black: #000000;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior:smooth;
  
  @media (max-width: 1080px){
    font-size: 93.75%; /* 15px */
  }
  @media (max-width: 720px){
    font-size: 87.5%; /* 14px */
  }
}

body{
  -webkit-font-smoothing: antialiased;
  max-width: 375px;
  width: 375px;
  box-sizing: border-box;
  overflow-x: hidden;
  background: var(--background);
}

body, input, textarea, button {
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  border: none;
  outline: none;
  background-color: transparent;
}

h1, h2, h3, h4, h5, h6, strong {
 font-weight: 400;
 font-family: 'Saira Stencil One', cursive;
}

p {
  font-family: 'Raleway', sans-serif;}

button{
  cursor: pointer;
  outline: none;
  border: none;
  font-family: 'Raleway', sans-serif;}

a{
  text-decoration: none;
  text-align: center;
}


`