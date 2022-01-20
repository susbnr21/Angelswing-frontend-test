//Importing React
import React, { useContext } from 'react';

//Importing features of Openlayers library
import {Map, View} from 'ol';
import {fromLonLat} from 'ol/proj';
import Feature from 'ol/Feature';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import Vector from 'ol/source/Vector';

//Importing the library styled components
import Styled from 'styled-components';

//Importing the API from api.tsx
import {Api} from '../../API/api';

//Importing the longitude and latitude of Seoul City Hall
import {
    seoulCityHallLatitude,
    seoulCityHallLongitude,
  } from '../../Locations/locations';

//Main Map class declaration

const MainMap = () => {
    const coordinates = useContext(Api);

    //Declaring the view and layers of the Seoul City Hall map with the zoom level 16.
    let map = new Map({
      target: "map-container",
      controls: [],
  
      view: new View({
        center: fromLonLat([seoulCityHallLongitude, seoulCityHallLatitude]),
        zoom: 16,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
    });

    //Assigning the blue circles in the given coordinates of the map of Seoul City Hall
    for (let i = 0; i < coordinates.length; i++) {
      let item = coordinates[i];
      let latitude = item[0];
      let longitude = item[1];
  
      let newFeature = new Feature({
        geometry: new Point(fromLonLat([longitude, latitude])),
        name: "newFeature",
      });
  
      var iconStyle = new Style({
        image: new Icon({
          color: "white",
          scale: 0.15,
          crossOrigin: "anonymous",
          src: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Blue2F8CC2_circle_100%25.svg",
        }),
      });
      newFeature.setStyle(iconStyle);
      const layerMarked = new VectorLayer({
        source: new Vector({
          features: [newFeature],
        }),
      });
      map.addLayer(layerMarked);
    }

    //Declaring the main map
    return (
      <React.Fragment>
        <MainMapping id="map-container"></MainMapping>
      </React.Fragment>
    );
}

export default MainMap;


//Styling the main map with proper height and width
const MainMapping = Styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;