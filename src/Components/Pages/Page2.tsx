//Importing React
import React from 'react';

//Importing SideNav.tsx
import SideNav from '../Main/SideNav';

//Importing the classes of styling elements in StyledComponent.tsx
import {DisplayContent} from '../Styled Components/StyledComponents';
import {SideNavContent} from '../Styled Components/StyledComponents';

//Declaring class Page2
const Page2 = () => {
    return(
        <React.Fragment>
            <SideNavContent>
                <SideNav Page2 />
                <DisplayContent/>
            </SideNavContent>
        </React.Fragment>
    );
}

//Exporting class Page2
export default Page2