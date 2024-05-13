//https://mocki.io/v1/e0440544-4ef9-4a94-9729-ea4ccd0b3250
// ": "4",
//     "CompanyName": "Salesforce.com",
//     "yearrange": "September 2021 - till date",
//     "position": "Senior Technical Consultant"
//   }

import React from 'react';
import WorkExpFormat from './WorkExpFormat';
import './WorkExp.css'


class WorkExp extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         formattedData:[],
         showTable:false
      }
      this.displayTable = this.displayTable.bind(this);
    }
    displayTable(){
        this.setState({formattedData:this.props.data, showTable:true});
    }
      

render(){
if(this.props.showDataValues){
    return (
        <div className='work-exp'>
           {this.props.data ? <pre className='Raw-JSON'>{JSON.stringify(this.props.data, null, 2)}</pre> : 'Loading...'}
          <div className='Format-button'>  <button className='fancy-button' onClick={this.displayTable}>Format</button></div>
            <WorkExpFormat showTable={this.state.showTable} tableData={this.state.formattedData} columnNames={this.props.columnNames}/>
        </div>

    )
}
else return;
   
}
}

export default WorkExp;