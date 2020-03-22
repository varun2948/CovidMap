import React, { Component } from 'react';
import {
    Map,
    TileLayer,
    Marker,
    Popup,
    CircleMarker,
    withLeaflet,
    LayersControl,
  } from 'react-leaflet';
import L from 'leaflet';
import 'react-leaflet-markercluster/dist/styles.min.css';
import 'leaflet/dist/leaflet.css';
import '../../css/green.css';
import MarkerClusterGroup from 'react-leaflet-markercluster';

class MapComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const position = [27.7, 85.4];
        return ( 
            <Map
            preferCanvas
            zoom={9}
            maxZoom={18}
            attributionControl
            zoomControl
            doubleClickZoom
            scrollWheelZoom
            dragging
            animate
             center={position} style={{height: "100vh"}}>
                  <TileLayer
                  // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  url="https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                  />
                <CircleMarker center={[27.62979, 85.52138]} 
                radius={12}
                fillColor='rgb(4, 124, 65)'
                color='rgb(4, 124, 65)'
                weight={3}
                opacity={1}
                fillOpacity={0.7}/>
                <CircleMarker center={[27.7021237, 85.282533]} 
                radius={12}
                fillColor='#d90404'
                color='#d90404'
                weight={3}
                opacity={1}
                fillOpacity={0.7}/>
            </Map>
         );
    }
}
 
export default MapComponent;