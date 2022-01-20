//Importing React
import React from 'react';

//Importing react router to route between pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Importing Main Map from MainMap.tsx
import MainMap from './Components/Main/MainMap'

//Importing styling MapComponent
import { MapComponent } from './Components/Styled Components/StyledComponents';

//Importing all three pages
import Page1 from './Components/Pages/Page1';
import Page2 from './Components/Pages/Page2';
import Page3 from './Components/Pages/Page3';

//Importing main styling from MainStyling.tsx
import MainStyling from './Components/Styled Components/MainStyling';

//Declaring class App
function App (){
  return(
    <React.Fragment>
      <Router>
        <MapComponent>
          <Routes>
            <Route path="/" element={<Page1/>}/>
            <Route path="/page2" element={<Page2/>}/>
            <Route path="/page3" element={<Page3/>}/>
          </Routes>
          <MainStyling/>
          <MainMap/>
        </MapComponent>
      </Router>
    </React.Fragment>
  );
}

//Exporting class App
export default App;