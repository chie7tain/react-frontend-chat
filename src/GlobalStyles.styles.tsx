import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
/* browser styles reset */
*,
*::before,
*::after {
  box-sizing:border-box;
}

:root{
--primary-grey:#F5FAFC;
--messageSection:#FAFAFA
--primary-text-grey:#829C99;
--primary-green:#128C7E;
--primary-light-green: hsl(125, 67%, 44%);
--primary-light-shade-green: #bdebc1;
--primary-white:#FFFFFF;
--primary-black: #222;
--text-grey:#7D7D7D;
--input-grey:#9393C1;
--borderRadius:4px ;
--inputBorderRadius:20.6071px;
  --transition: all 0.3s linear;
  --spacing: 0.25rem;
  --radius: 0.5rem;
}
  body{
    margin:0;
    padding:0;
    font-family: 'Roboto', sans-serif;
    background-color: #fafafa;
    box-sizing: border-box;
  }
`;
