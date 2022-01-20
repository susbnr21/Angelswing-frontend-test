//Importing axios for the responses
import axios from "axios";

//Importing react with useEffect and useState
import React, { useEffect, useState } from "react";
type Props = {
  children: React.ReactNode;
};
export const Api = React.createContext([]);

//Declaring the class api
const MainApi = ({ children }: Props) => {

  //Initializing a state
  const [coordinates, setCoordinates] = useState([]);

  //Getting the data from the given free server api using axios
  const getCoordinates = async () => {
    const locationResponse = await axios
      .get(
        "https://angelswing-frontend-test-serverless-api.vercel.app/api/locations"
      )
      .then((response) => response.data);
      setCoordinates(locationResponse.locations);
  };
  useEffect(() => {
    getCoordinates();
  }, []);

  return (
    <Api.Provider value={coordinates}>
      {children}
    </Api.Provider>
  );
};

//Exporting the class api
export default MainApi;
