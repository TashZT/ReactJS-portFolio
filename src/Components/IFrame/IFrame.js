
import './IFrame.css';
function IFrame() {
    return (
      <div className="I-Frame">
        <h3>A Little something! (Iframes in React)</h3>
        <iframe title="Video" src="https://youtube.com/embed/mCJWiR3Vdi8?si=yIWcQ94YOFHXxtqp" height="500px" width="500px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"></iframe>
      </div>
    );
  }
  
  export default IFrame;