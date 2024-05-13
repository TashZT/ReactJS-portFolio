import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Carousel from './Components/Carousel/Carousel';
import angularjs from './logos/angularjs.png'
import reactjs from './logos/reactjs.png'
import css from './logos/css.png'
import scss from './logos/scss.png'
import html5 from './logos/html5.png'
import sflwc from './logos/sflwc.png'
import nodejs from './logos/nodejs.png';
import Aboutme from './Components/Aboutme/Aboutme';
import GetDataWork from './Components/WorkExp/GetDataForWork';
 import SpeechComp from './Components/SpeechComp/SpeechComp';
 import IFrame from './Components/IFrame/IFrame';

class App extends React.Component{
  styles={
    color:"teal"
    
  }
  images = [ reactjs, angularjs, sflwc, nodejs, html5, scss, css];
    // zebaImage = zebapic;
    // imageStyle={height:"20%", width:"20%"};
render(){
  return <div className='App' style={this.styles}>

   
    <div className="About-me-block">
    <Aboutme/>
    <div className="hero-img"></div>
    <SpeechComp/>
    </div>
    <Carousel images={this.images}/>   
    <IFrame/>
    <GetDataWork/>
  </div>
}
}

export default App;
