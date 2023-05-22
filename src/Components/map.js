import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, MarkerF,Circle,Marker,InfoBox,MarkerClusterer,CircleF,Autocomplete,DirectionsService,DirectionsRenderer } from "@react-google-maps/api";
import image from "../assets/pin.png"
import Geocode from "react-geocode";
import axios from "axios";

function MyComponent() {

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const onLoad = (marker) => {
    console.log("marker:", marker);
  };
  const onMarkerDragEnd = (t) => {
   let data ={
    lat:t.latLng.lat(),
    long:t.latLng.lng()
   }
   setCenter(data);
setPosition(data);
    console.log("hhhhhhhhhhhhhhhhh", data);
  };
  const handlemapClick=(t)=>{
    let data ={
        lat:t.latLng.lat(),
        lng:t.latLng.lng()
       }
       setPosition(data)
       setCenter(data);
       axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${t.latLng.lat()},${t.latLng.lng()}&key=${''}`).then((res)=>{

         console.log("mapclickkonClick",res);
       })
  }
  const onZoomChanged=(t)=>{
    let data ={
        lat:t?.latLng.lat(),
        lng:t?.latLng.lng()
       }
       setPosition(data)

    console.log("onZoomChanged",t);
  }
//   const position = React.useMemo(() => ({ lat: 11.1271, lng: 78.6569 }), []);
  const [position, setPosition]= useState({ lat: 11.1271, lng: 78.6569 })
  const [center, setCenter] = useState({
    lat: 20.5937,
    lng: 78.9629,
  })
const [d, setD]= useState(null)
 const directionsCallback= (response)=> {
    console.log(response)

    if (response !== null) {
      if (response.status === 'OK') {
       console.log("response=====>",response);
       setD(response)
      } else {
        console.log('response: ', response)
      }
    }
  }
  const places = [
    {
      name: "Park Slope",
      latitude: "40.6710729",
      longitude: "-73.9988001",
    },   
    {
        name: "la Massana",
        countryCode: "AD",
        stateCode: "04",
        latitude: "42.54499000",
        longitude: "1.51483000"
    },
    {
        name: "Canillo",
        countryCode: "AD",
        stateCode: "02",
        latitude: "42.56760000",
        longitude: "1.59756000"
    },
  ] 
  

const start={
  lat: 9.9252,
  lng: 78.1198,
  label:"kavi",
  title:"developer",
}

const end={
  lat:13.0827,
  lng:80.2707
}

const change=(e)=>{
  var map_key = 'AIzaSyDhLHn48ZWFlgHDsZMwtFQ1r4z7rP9xZ24';

  axios
  .request({
    method: 'post',
    url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${map_key}&input=${e.target.value}`,
  })
  .then(response => {
  console.log("search",response);
  })
  .catch(e => {});
}
  // AIzaSyDsb7F-VyBJn7r4LilYH_lRHBpPfgyUga8
  // additional map keys
const [autocomplete, setAuto] = useState(null);
const onLoadS= (autocompletes)=> {
  console.log('autocomplete: ', autocompletes)

  // this.autocomplete = autocomplete
  setAuto(autocompletes)
}

function onPlaceChanged () {
  if (autocomplete !== null) {
    console.log("mmmmmmmmmmmmmmmmmmmm",autocomplete.getPlace().geometry.location,autocomplete.getBounds())
  setPosition({
    lat:autocomplete.getPlace().geometry.location.lat(),
    lng:autocomplete.getPlace().geometry.location.lng()
  })
  } else {
    console.log('Autocomplete is not loaded yet!')
  }
}

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDsb7F-VyBJn7r4LilYH_lRHBpPfgyUga8"
      libraries={["places"]}
    >
      <GoogleMap
        id="marker-example"
        mapContainerStyle={containerStyle}
        zoom={2}
        center={center}
        onClick={handlemapClick}
        options={{}}
      >
        <Autocomplete onLoad={onLoadS} onPlaceChanged={onPlaceChanged}>
          <input
            type="text"
            placeholder="Search Places"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              left: "50%",
              marginLeft: "-120px",
            }}
          />
        </Autocomplete>
        {/* {places.map(place => {
          return (
            <div>
                <InfoBox
      onLoad={onLoad}
      position={{
        lat: parseFloat(place.latitude),
        lng: parseFloat(place.longitude)
      }}
    >
      <div style={{ backgroundColor: 'yellow', opacity: 0.75, padding: 12 }}>
        <div style={{ fontSize: 16, fontColor: `#08233B` }}>
         {place.name}
        </div>
      </div>
    </InfoBox>
              <MarkerF
                position={{
                  lat: parseFloat(place.latitude),
                  lng: parseFloat(place.longitude)
                }}
              />
            </div>
          );
        })} */}
        {/* <DirectionsService
          // required
          options={{
            destination: start,
            origin: end,
            travelMode: "DRIVING",
            provideRouteAlternatives: true,
            drivingOptions: { departureTime: new Date() },
          }}
          // required
          callback={directionsCallback}
          // optional
          onLoad={(directionsService) => {
            console.log(
              "DirectionsService onLoad directionsService: ",
              directionsService
            );
          }}
          // optional
          onUnmount={(directionsService) => {
            console.log(
              "DirectionsService onUnmount directionsService: ",
              directionsService
            );
          }}
        />

        <DirectionsRenderer
          // required
          options={{
            directions: d,
          }}
          // optional
          onLoad={(directionsRenderer) => {
            console.log(
              "DirectionsRenderer onLoad directionsRenderer: ",
              directionsRenderer
            );
          }}
          // optional
          onUnmount={(directionsRenderer) => {
            console.log(
              "DirectionsRenderer onUnmount directionsRenderer: ",
              directionsRenderer
            );
          }}
        /> */}
        <MarkerF
          // icon={{
          //    url:image,
          //    fillColor: '#EB00FF',
          //    size:{
          //     height:"10px"
          //    },
          // }}
          onLoad={onLoad}
          position={position}
          draggable={true}
          onClick={handlemapClick}
          onDragEnd={(t) => onMarkerDragEnd(t)}
        />
        <CircleF
          center={position}
          radius={5000}
          options={{
            strokeColor: "#0022ff",
            fillColor: "#0099ff",
            fillOpacity: 0.1,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default MyComponent;
