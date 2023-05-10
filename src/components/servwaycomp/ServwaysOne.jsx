import '../../App.css';
import '../../css/store.css';
import '../../css/dropdown.css';
import { useEffect, useState } from 'react';

function ServwaysOne(props) {
  
 
  return (
    <div className="">
   
         <p className={props.ServMark == props.e.sername ? 'bcgreen' :''} onClick={()=>{
            props.getServWay(props.e.sername)
            props.MarkServingWay(props.e.sername)
         }} key={props.e.sername} >{props.e.sername}</p>
   
    </div>
  );
}

export default ServwaysOne;
