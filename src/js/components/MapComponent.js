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
         this.circleMarkerRef= React.createRef();
    }
    componentDidMount(){
        this.setState({fulldata: this.props.CoronaData});
        
        // d.className += " otherclass";
    }
    componentDidUpdate(){
        var d = this.circleMarkerRef.current;
        console.log(d,'d');
        d.className= 'blinking'
    }
    render() { 
        const{fulldata}=this.state;
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
            disableClusteringAtZoom={5}
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
                    let filteredRadius = 6;
                    let filtercolor= 'rgba(255, 0, 0, 0.274)';
                    
                    if(confirmed_cases > 0 && confirmed_cases <= 1000){
                            filteredRadius = 6;
                            filtercolor= 'red';
                            filtercolor= 'rgba(255, 0, 0, 0.274)';
                    }
                    else if(confirmed_cases > 1000 && confirmed_cases <= 10000){
                        filteredRadius = 10;
                        filtercolor= 'rgba(255, 0, 0, 0.5)';

                    }
                    else if (confirmed_cases >10000 && confirmed_cases < 20000){

                        filteredRadius = 14;
                        filtercolor= 'rgba(255, 0, 0, 0.7)';
                    }
                     if(confirmed_cases > 20000){
                         filteredRadius = 50;
                         filtercolor= 'rgba(255, 0, 0, 1)';
                     }
                    
                return (
                    <CircleMarker ref={this.circleMarkerRef} className='blinking' radius={filteredRadius} color={filtercolor} fillColor={filtercolor} style={{pointerType: 'cursor',animation: 'fade 1s infinite alternate'}} center={{lat:data.Latitude, lng:data.Longitude}} position={position}>
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