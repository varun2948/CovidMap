import React, { Component } from 'react'
import Logo from "../../images/logo.jpg";
import CoronaLogo from "../../images/Corona-logo.png";
import NaxaLogo from "../../images/naxa-logo.png";
import MedLogo from "../../images/firstaid.svg"
// import '../../css/style.css';
import MapComponent from './MapComponent';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeTab: 'facilities',
            selectedFacilities: '0',
            selectedProvince: '1',
            activePopup:false,

         }
    }
    handleTab=(option)=>{
        this.setState({
            activeTab: option 
        })
    }
    handleFacilities=(option)=>{
        this.setState(prevState => ({
            selectedFacilities: prevState.selectedFacilities === option ? '0' : option
          }));
    }
    handleProvince=(option)=>{
        this.setState(prevState => ({
            selectedProvince: prevState.selectedProvince === option ? '0' : option
          }));
    }
    openPopup=()=>{
        this.setState(prevState => ({
            activePopup: !prevState.activePopup 
          }));
    }
    render() { 
        const {activeTab,selectedFacilities,selectedProvince,activePopup}= this.state;
        return ( 
            <>
              <div className="corona-wrapper">
                    <aside className="sidebar">
                        
                        <header className="aside-header">
                            <a href="index.html">
                                <img src={CoronaLogo} alt="corona logo" />
                                <div className="logo-content">
                                    <h1>Covid-19</h1>
                                    <span className="case">Case Mapping</span><span className="country-text">Nepal</span>
                                </div>
                            </a>
                        </header>
                        <div className="aside-body">
                            <div className="tabs">
                                <ul className="custom-tab">
                                    <li><a href="#" data-tab="tab-1" onClick={()=>{this.handleTab('facilities')}} className={activeTab === 'facilities'? 'current': ''}> facilities</a></li>
                                    <li><a href="#" data-tab="tab-2" onClick={()=>{this.handleTab('cases')}} className={activeTab === 'cases'? 'current': ''}>cases</a></li>
                                </ul>
                                <div className="custom-tab-content">
                                    <div className={`content-item ${activeTab === 'facilities'? 'current': ''}`} id="tab-1">
                                        <ul className="filter">
                                            <li className="filter-dropdown">
                                                <div onClick={()=>{this.handleFacilities('1')}} className={`switch-filter switch-header ${selectedFacilities === '1'? 'active': ''}`}>
                                                    <h6 className="green">Hospitals </h6>
                                                    <label className="switch">
                                                        <input type="checkbox" value=""/>
                                                        <span className="slider"></span>
                                                    </label>
                                                </div>
                                                <ul className="filter-dropdown-menu" style={selectedFacilities === '1'? {display:'block'}: {display:'none'}}>
                                                    <li>
                                                        <div className="switch-filter">
                                                            <h6 className="green">Hospitals With ICU </h6>
                                                            <label className="switch">
                                                                <input type="checkbox" value=""/>
                                                                <span className="slider"></span>
                                                            </label>
                                                        </div>
                                                        <div className="switch-filter">
                                                            <h6 className="orange">Covid Test Labs/Facilities </h6>
                                                            <label className="switch">
                                                                <input type="checkbox" value=""/>
                                                                <span className="slider"></span>
                                                            </label>
                                                        </div>
                                                        <div className="switch-filter">
                                                            <h6 className="red">Govt. Made Quarantine Facilities</h6>
                                                            <label className="switch">
                                                                <input type="checkbox" value=""/>
                                                                <span className="slider"></span>
                                                            </label>
                                                        </div>
                                                        <div className="switch-filter">
                                                            <h6 className="yellow">Private  Made Quarantine Facilities  </h6>
                                                            <label className="switch">
                                                                <input type="checkbox" value=""/>
                                                                <span className="slider"></span>
                                                            </label>
                                                        </div>
                                                        <div className="switch-filter">
                                                            <h6 className="red-dark">Other Health Facilities </h6>
                                                            <label className="switch">
                                                                <input type="checkbox" value=""/>
                                                                <span className="slider"></span>
                                                            </label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="filter-dropdown">
                                                <div onClick={()=>{this.handleFacilities('2')}} className={`switch-filter switch-header ${selectedFacilities === '2'? 'active': ''}`}>
                                                    <h6 className="green">Covid Test Labs/Facilities</h6>
                                                    <label className="switch">
                                                        <input type="checkbox" value=""/>
                                                        <span className="slider"></span>
                                                    </label>
                                                </div>
                                                <ul className="filter-dropdown-menu" style={selectedFacilities === '2'? {display:'block'}: {display:'none'}}>
                                                    <li>
                                                        <div className="switch-filter" >
                                                            <h6 className="green">Hospitals With ICU , Bed No Info </h6>
                                                            <label className="switch">
                                                                <input type="checkbox" value=""/>
                                                                <span className="slider"></span>
                                                            </label>
                                                        </div>
                                                        <div className="switch-filter">
                                                            <h6 className="orange">Covid Test Labs/Facilities </h6>
                                                            <label className="switch">
                                                                <input type="checkbox" value=""/>
                                                                <span className="slider"></span>
                                                            </label>
                                                        </div>
                                                        <div className="switch-filter">
                                                            <h6 className="red">Govt. Made Quarantine Facilities</h6>
                                                            <label className="switch">
                                                                <input type="checkbox" value=""/>
                                                                <span className="slider"></span>
                                                            </label>
                                                        </div>
                                                        <div className="switch-filter">
                                                            <h6 className="yellow">Private  Made Quarantine Facilities  </h6>
                                                            <label className="switch">
                                                                <input type="checkbox" value=""/>
                                                                <span className="slider"></span>
                                                            </label>
                                                        </div>
                                                        <div className="switch-filter">
                                                            <h6 className="red-dark">Other Health Facilities </h6>
                                                            <label className="switch">
                                                                <input type="checkbox" value=""/>
                                                                <span className="slider"></span>
                                                            </label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="filter-dropdown">
                                                <div onClick={()=>{this.handleFacilities('3')}} className={`switch-filter switch-header ${selectedFacilities === '3'? 'active': ''}`}>
                                                    <h6 className="green">Govt. Made Quarantine Facilities </h6>
                                                    <label className="switch">
                                                        <input type="checkbox" value=""/>
                                                        <span className="slider"></span>
                                                    </label>
                                                </div>
                                                <ul className="filter-dropdown-menu" style={selectedFacilities === '3'? {display:'block'}: {display:'none'}}>
                                                    <li>
                                                        <div className="switch-filter" >
                                                            <h6 className="green">Hospitals With ICU , Bed No Info </h6>
                                                            <label className="switch">
                                                                <input type="checkbox" value=""/>
                                                                <span className="slider"></span>
                                                            </label>
                                                        </div>
                                                        <div className="switch-filter">
                                                            <h6 className="orange">Covid Test Labs/Facilities </h6>
                                                            <label className="switch">
                                                                <input type="checkbox" value=""/>
                                                                <span className="slider"></span>
                                                            </label>
                                                        </div>
                                                        <div className="switch-filter">
                                                            <h6 className="red">Govt. Made Quarantine Facilities</h6>
                                                            <label className="switch">
                                                                <input type="checkbox" value=""/>
                                                                <span className="slider"></span>
                                                            </label>
                                                        </div>
                                                        <div className="switch-filter">
                                                            <h6 className="yellow">Private  Made Quarantine Facilities  </h6>
                                                            <label className="switch">
                                                                <input type="checkbox" value=""/>
                                                                <span className="slider"></span>
                                                            </label>
                                                        </div>
                                                        <div className="switch-filter">
                                                            <h6 className="red-dark">Other Health Facilities </h6>
                                                            <label className="switch">
                                                                <input type="checkbox" value=""/>
                                                                <span className="slider"></span>
                                                            </label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                    <div className={`content-item ${activeTab === 'cases'? 'current': ''}`} id="tab-2">
                                        <div className="body-header">
                                            <div className="corona-card">
                                                <div className="corona-header">
                                                    <h5><span>Total confirmed cases</span> <span className="counter">2</span></h5>
                                                </div>
                                                <div className="corona-body">
                                                    <div className="progress-bar">
                                                        <span className="progress-status active" style={{flex:"0 0 33.333%"}}></span>
                                                        <span className="progress-status recovered" style={{flex:"0 0 33.333%"}}></span>
                                                        <span className="progress-status fatal" style={{flex:"0 0 33.333%"}}></span>
                                                    </div>
                                                    <ul>
                                                        <li className="status active">
                                                            <span>Active cases</span>
                                                            <span className="counter">2</span>
                                                        </li>
                                                        <li className="status recovered">
                                                            <span>Recovered cases</span>
                                                            <span className="counter">1</span>
                                                        </li>
                                                        <li className="status fatal">
                                                            <span>Fatal cases</span>
                                                            <span className="counter">0</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="province-body acc" id="acc">
                                            <div className="province-list acc-list">
                                                <div onClick={()=>{this.handleProvince('1')}} className={`corona-header acc-header ${selectedProvince === '1'? 'active': ''}`}>
                                                    <h5><span>Province 1</span><span className="counter">1</span></h5>
                                                    <div className="progress-bar">
                                                        <span className="progress-status active" style={{flex: "0 0 25%"}}></span>
                                                        <span className="progress-status recovered" style={{flex: "0 0 75%"}}></span>
                                                    </div>
                                                </div>
                                                <ul className="district-list acc-content" style={selectedProvince === '1'? {display:'block'}: {display:'none'}}>
                                                    <li>
                                                        <a href="#"><span className="district">Kathmandu</span><span className="counter">0</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span className="district">Lalitpur</span><span className="counter">1</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span className="district">Bhaktapur</span><span className="counter">0</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="province-list acc-list">
                                                <div onClick={()=>{this.handleProvince('2')}} className={`corona-header acc-header ${selectedProvince === '2'? 'active': ''}`}>
                                                    <h5><span>Province 2</span><span className="counter">1</span></h5>
                                                    <div className="progress-bar">
                                                        <span className="progress-status active" style={{flex: "0 0 25%"}}></span>
                                                        <span className="progress-status recovered" style={{flex: "0 0 75%"}}></span>
                                                    </div>
                                                </div>
                                                <ul className="district-list acc-content" style={selectedProvince === '2'? {display:'block'}: {display:'none'}}>
                                                    <li>
                                                        <a href="#"><span className="district">Kathmandu</span><span className="counter">0</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span className="district">Lalitpur</span><span className="counter">1</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span className="district">Bhaktapur</span><span className="counter">0</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="province-list acc-list">
                                                <div onClick={()=>{this.handleProvince('3')}} className={`corona-header acc-header ${selectedProvince === '3'? 'active': ''}`}>
                                                    <h5><span>Province 3</span><span className="counter">1</span></h5>
                                                    <div className="progress-bar">
                                                        <span className="progress-status active" style={{flex: "0 0 25%"}}></span>
                                                        <span className="progress-status recovered" style={{flex: "0 0 75%"}}></span>
                                                    </div>
                                                </div>
                                                <ul className="district-list acc-content" style={selectedProvince === '3'? {display:'block'}: {display:'none'}}>
                                                    <li>
                                                        <a href="#"><span className="district">Kathmandu</span><span className="counter">0</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span className="district">Lalitpur</span><span className="counter">1</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span className="district">Bhaktapur</span><span className="counter">0</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="province-list acc-list">
                                                <div onClick={()=>{this.handleProvince('4')}} className={`corona-header acc-header ${selectedProvince === '4'? 'active': ''}`}>
                                                    <h5><span>Province 4</span><span className="counter">1</span></h5>
                                                    <div className="progress-bar">
                                                        <span className="progress-status active" style={{flex: "0 0 25%"}}></span>
                                                        <span className="progress-status recovered" style={{flex: "0 0 75%"}}></span>
                                                    </div>
                                                </div>
                                                <ul className="district-list acc-content" style={selectedProvince === '4'? {display:'block'}: {display:'none'}}>
                                                    <li>
                                                        <a href="#"><span className="district">Kathmandu</span><span className="counter">0</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span className="district">Lalitpur</span><span className="counter">1</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span className="district">Bhaktapur</span><span className="counter">0</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="province-list acc-list">
                                                <div onClick={()=>{this.handleProvince('5')}} className={`corona-header acc-header ${selectedProvince === '5'? 'active': ''}`}>
                                                    <h5><span>Province 5</span><span className="counter">1</span></h5>
                                                    <div className="progress-bar">
                                                        <span className="progress-status active" style={{flex: "0 0 25%"}}></span>
                                                        <span className="progress-status recovered" style={{flex: "0 0 75%"}}></span>
                                                    </div>
                                                </div>
                                                <ul className="district-list acc-content" style={selectedProvince === '5'? {display:'block'}: {display:'none'}}>
                                                    <li>
                                                        <a href="#"><span className="district">Kathmandu</span><span className="counter">0</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span className="district">Lalitpur</span><span className="counter">1</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span className="district">Bhaktapur</span><span className="counter">0</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="province-list acc-list">
                                                <div onClick={()=>{this.handleProvince('6')}} className={`corona-header acc-header ${selectedProvince === '6'? 'active': ''}`}>
                                                    <h5><span>Province 6</span><span className="counter">1</span></h5>
                                                    <div className="progress-bar">
                                                        <span className="progress-status active" style={{flex: "0 0 25%"}}></span>
                                                        <span className="progress-status recovered" style={{flex: "0 0 75%"}}></span>
                                                    </div>
                                                </div>
                                                <ul className="district-list acc-content" style={selectedProvince === '6'? {display:'block'}: {display:'none'}}>
                                                    <li>
                                                        <a href="#"><span className="district">Kathmandu</span><span className="counter">0</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span className="district">Lalitpur</span><span className="counter">1</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span className="district">Bhaktapur</span><span className="counter">0</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>

                        <footer className="aside-footer">
                            <span>Designed by</span>
                            <a href="http://naxa.com.np/">
                                <img src={NaxaLogo} alt="naxa-logo" />
                            </a>
                        </footer>
                    </aside>

                    <main className="main">
            <div id="map" className="map" style={{height: "100vh"}}>
                <MapComponent/>
            </div>
            <div className="sidebar-right">
                <div className="sidebar-header">
                    <h2>Summary</h2>
                </div>
                <div className="sidebar-body">
                    <ul>
                        <li>
                            <span className="icon">
                                <i className="material-icons">local_hospital</i>
                            </span>
                            <div className="summary-content">
                                <h4>12</h4>
                                <p>Total No. Of Hospitals with ICU Facilities</p>
                            </div>
                        </li>
                        <li>
                            <span className="icon">
                                <i className="material-icons">local_hotel</i>
                            </span>
                            <div className="summary-content">
                                <h4>12</h4>
                                <p>Total no of ICU beds available</p>
                            </div>
                        </li>
                        <li>
                            <span className="icon">
                                <i className="material-icons">location_city</i>
                            </span>
                            <div className="summary-content">
                                <h4>12</h4>
                                <p>Total no of recent Isolation buildings </p>
                            </div>
                        </li>
                        <li>
                            <span className="icon">
                                <i className="material-icons">event_seat</i>
                            </span>
                            <div className="summary-content">
                                <h4>12</h4>
                                <p>Total no of Isolation Beds Available</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="glimps">
            <img src={MedLogo} alt="first aid" />
                <a href="#" popup-link="popup-link" onClick={this.openPopup} className="common-button is-bg add-button">Add health facilities</a>
            </div>
            
        </main>
                    
                    <div className={`popup ${activePopup ? 'open': ''}`} id="popup-link">
                        <div className="popup-container">
                            <div className="popup-body">
                                <div className="popup-header">
                                    <h3>Add Health facilities</h3>
                                </div>
                                <div className="popup-content">
                                    <form>
                                        <div className="form-group">
                                            <label>Health facilities</label>
                                            <input type="text" className="form-control" placeholder="Health Facilities" />
                                        </div>
                                        <div className="form-group">
                                            <label>Health facilities</label>
                                            <input type="text" className="form-control" placeholder="Health Facilities" />
                                        </div>
                                    </form>
                                </div>
                                <div className="popup-footer buttons end">
                                    <button type="" onClick={this.openPopup} className="common-button is-border cancel-button">cancel</button>
                                    <button type="submit" className="common-button is-bg">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
         );
    }
}
 
export default MainComponent;