
import React from "react"

import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar.js';

import{
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import{
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox"

import "@reach/combobox/styles.css";

const libraries = ["places"];
const mapContainerStyle = {
  width: "1000px",
  height: "750px",
};

const center = {
  lat: 43,
  lng: -79
};


const options = {
  disableDefaultUI: true,
  zoomControl: true
}

export default function App(){

  const [marker, setMarker] = React.useState(0);

  const{isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: "AIzaSyAtQZ0VfmTSvS7B3ZtSQ3WbWVaQo6jC5kA"
    , libraries
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  })

  const panTo = React.useCallback(({lat, lng}) =>{
    mapRef.current.panTo({lat, lng});
    mapRef.current.setZoom(14);
  }, [])


  

  if(loadError) return "Error loading maps";
  if(!isLoaded) return "Loading Maps";
  return(
    <div>
    <div class = 'rowC'>
      {/* <header className="App-header">
        MacroHard
      </header> */}
      <Sidebar></Sidebar>
      
      <div> 
        <div class = "search">
            <Search panTo = {panTo}/>
        </div>
        <div class = "currentLoc">
          <Locate panTo = {panTo}/>
        </div>
      <GoogleMap 
      mapContainerStyle = {mapContainerStyle} 
      zoom = {8} 
      center = {center}
      options = {options}
      onLoad = {onMapLoad}
      onClick = {(event) =>
      {
        setMarker(
          {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
          }
        )
      }}
    >
        <Marker position ={{lat:marker.lat, lng:marker.lng}}> </Marker>
    </GoogleMap>
      </div>
    </div>
    </div>
  )};

function Locate({panTo}){
  return(
    <button className ="locate" onClick ={() => {
      navigator.geolocation.getCurrentPosition((position) => {
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      }
      ,() => null,options);
    }}>
    <img src = "images.png" alt = "Locate me!" /> 
    </button>
  )
}
function Search({panTo}){
  const{ready,value,suggestions: {status,data}, setValue, clearSuggestion} = usePlacesAutocomplete({requestOptions:{
    location: {lat: () => 40, lng: ()=>-79},
    radius: 200 * 1000,
  }});

  return(
    <div className = "search">
      <Combobox onSelect = {async (address) => {
        try{
          const results = await getGeocode({address});
          const { lat, lng } = await getLatLng(results[0]);
          panTo({lat, lng});
        }catch(error){
          console.log("error!");
        }
    }}>
      <ComboboxInput value = {value} onChange = {(e) => {
        setValue(e.target.value);
      }}
      disabled = {!ready}
      placeHolder = "Enter an address"
      />
      <ComboboxPopover>
        <ComboboxList>
        {status === "OK" && data.map(({id, description}) => <ComboboxOption key= {id} value = {description}></ComboboxOption>)}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
    </div>
  );
}
