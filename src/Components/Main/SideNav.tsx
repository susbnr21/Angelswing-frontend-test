//Importing React
import React from 'react';

//Import Styled Component for styling
import Styled from 'styled-components';

//Importing react router dom to route between different tabs
import { Link } from 'react-router-dom';

//Importing icons
import map from '../../Assets/map.png';
import scale from '../../Assets/scale.png';
import layers from '../../Assets/layers.png';

//Importing the classes of interface.ts
import { iPageProps } from '../../Interface/interface';
import { iPageIconProps } from '../../Interface/interface';

//Main SideNav class declaration
const SideNav: React.FC<iPageProps> = ({Page1, Page2, Page3}) => {
    return(
        <React.Fragment>
            <SideNavContainer>
                <PageContainer>
                
                {/* Assigning the icon and link to the first page of the application */}
                {Page1 ? (
                    <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                    >
                    <SelectedActivePage>
                        <Page1Icon src={map} alt="tab1" white />
                    </SelectedActivePage>
                    </Link>
                ) : (
                    <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                    >
                    {" "}
                    <SelectedPage>
                        <Page1Icon src={map} alt="tab1" />
                    </SelectedPage>
                    </Link>
                )}

                {/* Assigning the icon and link to the second page of the application */}
                {Page2 ? (
                    <Link
                    to="/page2"
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                    >
                    <SelectedActivePage>
                        <Page1Icon src={scale} alt="tab2" white />
                    </SelectedActivePage>
                    </Link>
                ) : (
                    <Link
                    to="/page2"
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                    >
                    {" "}
                    <SelectedPage>
                        <Page1Icon src={scale} alt="tab2" />
                    </SelectedPage>
                    </Link>
                )}

                {/* Assigning the icon and link to the third page of the application */}
                {Page3 ? (
                    <Link
                    to="/page3"
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                    >
                    <SelectedActivePage>
                        <Page1Icon src={layers} alt="tab3" white />
                    </SelectedActivePage>
                    </Link>
                ) : (
                    <Link
                    to="/page3"
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                    >
                    {" "}
                    <SelectedPage>
                        <Page1Icon src={layers} alt="tab2" />
                    </SelectedPage>
                    </Link>
                )}
                </PageContainer>
            </SideNavContainer>
        </React.Fragment>
    )
}

//Exporting the class SideNav
export default SideNav;

//Styling the given tags above
//SideNavContainer
const SideNavContainer = Styled.div`
  min-height: 50rem;
  padding: 2% 2%;
  font-weight: bold;
  box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1),
    0px 3.2px 7.2px rgba(0, 0, 0, 0.3);
`;

//PageContainer
const PageContainer = Styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//SelectedPage
const SelectedPage = Styled.div`
  padding: 14px 15px 10px 15px;

  cursor: pointer;
  margin-bottom: 30%;
`;

//SelectedActivePage
const SelectedActivePage = Styled(SelectedPage)`
  background: #1f4782;

  border-radius: 4px;
`;

//Page1Icon
const Page1Icon = Styled.img<iPageIconProps>`
  width: 17px;
  height: 15.94px;

  align-self: center;
  filter: ${(props: iPageIconProps) =>
    props.white ? "brightness(0) invert(1); " : null};
`;