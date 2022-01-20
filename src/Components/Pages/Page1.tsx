//Importing React
import React, {useContext} from 'react';

//Import Styled Components for styling elements
import Styled from 'styled-components';

//Importing SideNav.tsx
import SideNav from '../Main/SideNav';

//Importing the classes of styling elements in StyledComponent.tsx
import {DisplayContent} from '../Styled Components/StyledComponents';
import {SideNavContent} from '../Styled Components/StyledComponents';

//Importing green-marker.png
import greenMarker from '../../Assets/green-marker.png'

//Importing the Api class from Api.tsx
import {Api} from '../../API/api';

//Importing the iSpanTextProps from interface.ts
import {iSpanTextProps} from '../../Interface/interface';

//Declaring class Page1
const Page1 = () => {

    //Assigning class coordinates to useContext of Api
    const coordinates = useContext(Api);

    return(
        <React.Fragment>
            <SideNavContent>
                <SideNav Page1 />

                <DisplayContent>
                    {coordinates &&
                    coordinates.map((lo, i) => {
                        return (
                        <SectionDataResponse key={i}>
                            <LocationMarker>
                                <MyLocationMarker src={greenMarker} />
                                <H3>Location {i + 1}</H3>
                            </LocationMarker>
                            <LatitudeLine>
                                <Span>Lat</Span>
                                <DataBox>{lo && lo[0]}</DataBox>
                            </LatitudeLine>
                            <LatitudeLine>
                                <Span lon>Long</Span>
                                <DataBox>{lo && lo[1]}</DataBox>
                            </LatitudeLine>
                        </SectionDataResponse>
                        );
                    })}
                </DisplayContent>

            </SideNavContent>
        </React.Fragment>
    );
}

//Exporting class Page1
export default Page1;

//Styling elements
const SectionDataResponse = Styled.div`
  margin-bottom: 1.3rem;
  display: flex;
  flex-direction: column;
`;
const LocationMarker = Styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
  font-weight: 400;
`;

const MyLocationMarker = Styled.img`
  width: 15px;

  align-self: center;
`;
const H3 = Styled.h3`
  margin-left: 8%;
  font-weight: 400;
  font-size: 15px;
  line-height: 21.72px;
  font-style: normal;
  color: #4d4c4c;
`;

const LatitudeLine = Styled.div`
  display: flex;
  margin-bottom: 3%;
  flex-direction: row;
  align-items: center;
`;

const Span = Styled.span<iSpanTextProps>`
  margin-right: ${(props: iSpanTextProps) => (props.lon ? "8px" : "13px")};
  font-size: 13px;
  font-weight: 700;
  color: #4d4c4c;
`;

const DataBox = Styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: #c7c7c7;
  border-radius: 3px;
  padding: 3%;
  width: 8.4rem;
  margin-left: 4%;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #2b4877;
`;