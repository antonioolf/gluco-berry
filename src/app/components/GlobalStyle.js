import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  }

  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), url('font/Montserrat-VariableFont_wght.ttf') format('opentype');
  }

  :root {
    --blue-1: #4477b1;
    --blue-2: #3BA3FF;
    --blue-3: #5CB3FF;
    --blue-4: #5FC5E9;

    --red-1: #FF3B3B;

    --dark-background: #1C1C1C;

    --font-size-small: 18px;
    --font-size-normal: 22px;
    --font-size-medium: 38px;
    --font-size-big: 44px;
    
  }
`;

export default GlobalStyle;
