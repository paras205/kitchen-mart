import React, { useState } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

const Leaflet = () => {
  const [coordinate, setCoordinate] = useState({
    lat: 51.505,
    lng: -0.09,
    zoom: 13
  });
  const position = [coordinate.lat, coordinate.lng];
  return (
    <Map center={position} zoom={13}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}></Marker>
    </Map>
  );
};

export default Leaflet;
