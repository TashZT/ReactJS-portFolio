import React from 'react';
import audio from '../../logos/audio.png';
import './SpeechComp.css';

 class SpeechComp extends React.Component {
    speechHandler =()=>{
        const voices = speechSynthesis.getVoices();
        const utterThis = new SpeechSynthesisUtterance();
        utterThis.text = "Zayba Tehseen";
        utterThis.voice = voices[0];
        
        window.speechSynthesis.speak(utterThis);
    }
  render() {
    return (
        <div  className="Speech-Comp">
            <h2 className='audio-name'>Zeba Tahseen</h2><img className='audio-img' src={audio} alt="" onClick={this.speechHandler}/>
        </div>
    )
  }
}
// import { useState } from "react"

// function SpeechComp() {
//   const [ourText, setOurText] = useState("")
//   const msg = new SpeechSynthesisUtterance()

//   const SpeechHandler = () => {
//     msg.text = ourText
//     window.speechSynthesis.speak(msg)
//   }

//   return (
//     <div className='App'>
//       <h1>React Text to Speech App</h1>
//       <input
//         type='text'
//         value={ourText}
//         placeholder='Enter Text'
//         onChange={(e) => setOurText(e.target.value)}
//       />
//       <button onClick={SpeechHandler}>SPEAK</button>
//     </div>
//   )
// }


export default SpeechComp