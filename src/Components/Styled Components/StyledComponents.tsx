//Importing styled component for styling elements
import Styled from 'styled-components';

//DisplayContent
export const DisplayContent = Styled.div`
  width: 100%;
  padding: 6% 8%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: #fbfbfb;
  box-shadow: inset 11px 4px 9px -15px rgba(0, 0, 0, 0.75);
`;

//SideNavContent
export const SideNavContent = Styled.div`
  display: flex;
  height: 100vh;
  width: 34%;
  min-width: 270px;
  flex-direction: row;
  overflow-y: hidden;
`;

//MapComponent
export const MapComponent = Styled.div`
  display: flex;
  flex-direction: row;
`;
