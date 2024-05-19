
import React, {useState,useEffect} from 'react';
import WorkExp from './WorkExp';
import './WorkExp.css'

function GetDataWork(){
    const [data, setData] = useState(null);
    const [showDataValues, setshowDataValues] = useState(null);
    const columnNames=[
        "Order",
        "CompanyName",
        "Experience",
        "Position"
      ];
     //let showDataValues = false;

    useEffect(() => {
      fetch('https://mocki.io/v1/e0440544-4ef9-4a94-9729-ea4ccd0b3250')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);
    const showData = ()=>{
      setshowDataValues(true);
    }
    
    return (
        <div className='API-playground'>
         <div className='Test-button'> <button className='fancy-button' onClick={showData}>My Work Experience</button> </div>
           <WorkExp columnNames={columnNames} data={data} showDataValues={showDataValues}/>
        </div>

    )
}

export default GetDataWork