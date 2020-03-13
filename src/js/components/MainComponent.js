import React, { Component } from 'react';
import MapComponent from './MapComponent';
import Logo from '../../images/logo.jpg';
import CoronaData from '../../data/coronaData_13March.json';
class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fulldata: []
         }
    }
    componentDidMount(){
        this.setState({fulldata: CoronaData});
    }
    render() { 
        const {fulldata}=this.state;
        const totalCases = fulldata && fulldata.reduce(function(a, b){
            return a + b.Confirmed;
        }, 0);
        console.log(totalCases);
        return ( 
            <body onunload="" className="map-fullscreen page-homepage navigation-off-canvas" id="page-top">
                <div id="outer-wrapper">

                    <div id="inner-wrapper">

                        <div className="header">
                            <div className="wrapper">
                                <div className="brand">
                                    <a href="http://themestarz.net/html/spotter/index-real-estate.html"><img width="140px" height="90px" src={Logo} alt="logo"/></a>
                                </div>
                                <nav className="navigation-items">
                                    <div className="wrapper">
                                        <ul className="main-navigation navigation-top-header"></ul>
                                        <ul className="user-area">
                                            <li><a href="http://themestarz.net/html/spotter/sign-in.html">Sign In</a></li>
                                            <li><a href="http://themestarz.net/html/spotter/register.html"><strong>Register</strong></a></li>
                                        </ul>
                                        <a href="http://themestarz.net/html/spotter/submit.html" className="submit-item">
                                            <div className="content"><span>Submit Your Item</span></div>
                                            <div className="icon">
                                                <i className="fa fa-plus"></i>
                                            </div>
                                        </a>
                                        <div className="toggle-navigation">
                                            <div className="icon">
                                                <div className="line"></div>
                                                <div className="line"></div>
                                                <div className="line"></div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    
                        <div id="page-canvas">
                    
                            <nav className="off-canvas-navigation">
                                <header>Navigation</header>
                                <div className="main-navigation navigation-off-canvas"></div>
                            </nav>
                    
                            <div id="page-content">
                    
                                <div className="map-canvas list-solid">
                            
                                    <div className="map">
                                        <div className="toggle-navigation">
                                            <div className="icon">
                                                <div className="line"></div>
                                                <div className="line"></div>
                                                <div className="line"></div>
                                            </div>
                                        </div>
                                
                                        <div id="map" className="has-parallax" style={{'height':'100%',width:'100%'}}>
                                            <MapComponent CoronaData={CoronaData}/>
                                        </div>
                                    </div>
                            
                                    <div className="items-list">
                                        <div className="inner">
                                            <div className="scroller1">
                                                <div className="filter">
                                                    <form className="main-search" role="form" method="post" action="http://themestarz.net/html/spotter/index-osm.html?">
                                                        <header className="clearfix">
                                                            <h3 className="pull-left">Search</h3>
                                                            <h2>Total Number Of Cases: <span className="total_cases">{totalCases}</span> </h2>
                                                            <a href="index-osm.html#advanced-search" className="show-more pull-right" data-toggle="collapse" aria-expanded="false" aria-controls="advanced-search">Advanced Search</a>
                                                        </header>
                                                        
                                                
                                                    </form>
                                            
                                                </div>
                                    
                                                <header className="clearfix">
                                                    <h3 className="pull-left">Results</h3>
                                                    <div className="buttons pull-right">
                                                        <span>Display:</span>
                                                        <span className="icon active" id="display-grid"><i className="fa fa-th"></i></span>
                                                        <span className="icon" id="display-list"><i className="fa fa-th-list"></i></span>
                                                    </div>
                                                </header>
                                                <ul className="results grid">

                                                </ul>
                                                <div className="scroller__track">
                                                    <div className="scroller__bar"></div>
                                                </div>
                                            </div>
                                        </div>
                                
                                    </div>
                            
                                </div>
                            
                            </div>
                        
                        </div>
                    
                    </div>
                    
                </div>
            </body>      
);
    }
}
 
export default MainComponent;