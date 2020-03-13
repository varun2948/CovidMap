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
import MarkerClusterGroup from 'react-leaflet-markercluster';

import Logo from '../../images/logo.jpg';
class MapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            fulldata: []
         }
    }
    componentDidMount(){
        this.setState({fulldata: this.props.CoronaData});
    }
    render() { 
        const{fulldata}=this.state;
        console.log(this.state.fulldata,'fulldata');
        const position = [27.505, 84.09];
        return ( 
            <Map
            preferCanvas
          zoom={4}
          maxZoom={18}
          attributionControl
          zoomControl
          doubleClickZoom
          scrollWheelZoom
          dragging
          animate
           center={position} style={{height:'900px',width:'100%'}}>
                <TileLayer
                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                url="https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                 <MarkerClusterGroup
            disableClusteringAtZoom={12}
            // ref={groupRef}
          >
                { fulldata && fulldata.map(data=>{
                     const recovered= data['Recovered'];
                     const country_region= data['Country/Region'];
                     const province_state= data['Province/State'];
                     const confirmed_cases= data['Confirmed'];
                     const confirmed_deaths= data['Deaths'];
                     const confirmed_recovered= data['Recovered'];
                    // const {recovered,country_region,province_state}= data;
                    console.log(data['Province/State'],'country');
                return (
                    <CircleMarker style={{pointerType: 'cursor'}} center={{lat:data.Latitude, lng:data.Longitude}} position={position}>
                    <Popup>
                        <div class="infobox ">
                            <div class="inner">
                                <div class="image">
                                    <div class="item-specific">
                                        {/* <span title="Bedrooms">
                                            <img src={Logo} height='555px' width="415px"/>
                                            2
                                        </span> */}
                                    </div>
                                    <div class="overlay">
                                        <div class="wrapper">
                                            <a href="#" class="quick-view" data-toggle="modal" data-target="#modal" id="1">
                                                Quick View
                                            </a>
                                            <hr/>
                                            <a href="real-estate-item-detail.html" class="detail">
                                                Go to Detail
                                            </a>
                                        </div>
                                    </div>
                                    <a href="real-estate-item-detail.html" class="description">
                                        
                                        <div class="meta">
                                            
                                            <div class="confirmcase">
                                                Confirmed Cases:{confirmed_cases}
                                            </div>
                                            <div class="recoveredcase">
                                                Recovered Cases:{confirmed_recovered}
                                            </div>
                                            <div class="deathcase">
                                                Death Cases:{confirmed_deaths}
                                            </div>
                                            <h2>.</h2>
                                            <figure>.</figure>
                                            {/* <i class="fa fa-angle-right"></i> */}
                                        </div>
                                    </a>
                                    <img src={Logo}/>
                                    <div class="country_title">
                                                {country_region} {province_state ? `(${province_state})` : ''}
                                            </div>
                                </div>
                            </div>
                        </div>
                    </Popup>
                    </CircleMarker>
                )})
                })
                </MarkerClusterGroup>
            </Map>
         );
    }
}
 
export default MapComponent;