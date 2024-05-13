import React from 'react';
import './WorkExp.css'


class WorkExpFormat extends React.Component{

    render() {
        if(this.props.showTable){
        return(
         
<table className='Work-Exp-Table'>
<thead><tr>
    {
        this.props?.columnNames?.length ? this.props.columnNames.map(cname=>{
           return( 
            <th key={cname}>{cname}</th>
           )
        }):""
    } </tr></thead>
    <tbody>
{
    
this.props?.tableData?.length? this.props.tableData.map(ele=>{
   return( <tr key={ele.sno}>
    <td>{ele.sno}</td>
    <td>{ele.CompanyName}</td>
    <td>{ele.position}</td>
    <td>{ele.yearrange}</td>
    </tr>)
}):""
}</tbody>
</table>
       

    ) 
}
else{
    return;
}
}
}


export default WorkExpFormat