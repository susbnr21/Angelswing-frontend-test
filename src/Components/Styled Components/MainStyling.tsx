//Importing createGlobalStyle from styled components 
import { createGlobalStyle } from "styled-components";

//Assigning MainStyling as a class
const MainStyling = createGlobalStyle`

* {
  box-sizing: border-box;
  font-family: 'Noto Sans', sans-serif;
  padding: 0;
  margin: 0; 
}
`;

//Exporting the class MainStyling
export default MainStyling;
