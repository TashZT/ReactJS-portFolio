import React, { Component } from 'react';
import bellA from './Bell.png';
import bellB from './BellSub.png'

export class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Subscribe to Simplilearn",
         buttonLabel:"Subscribe",
         imageURL: bellA
      }
    }
    userSubscribed = () =>{
        this.setState({buttonLabel: "Subscribed", message:"Click on the bell icon"});
    }
    updateImage = () =>{
        this.setState({imageURL: bellB, message:"Thank you, happy learning"});
    }
  render() {
    return (
      <div className='App'>{this.state.message}<br/>
        <button onClick={this.userSubscribed}>{this.state.buttonLabel}</button>
        <br/>
        <img alt='' src={this.state.imageURL} height="50" width="50" onClick={this.updateImage}/>
      </div>
    )
  }
}

export default NewComp