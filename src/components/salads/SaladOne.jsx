import '../../App.css';
import '../../css/store.css';
import '../../css/dropdown.css';
import { useEffect, useState } from 'react';

function SaladOne(props) {
    const[MarkSaladState,setMarkSalad]= useState(false)
    function MarkSalad(){
      setMarkSalad(!MarkSaladState)
    }
   useEffect(()=>{

setMarkSalad(false)
   },[props.clearStateBtn])
    
      return (
        <div className="">
       
             <p key={props.e.sname} onClick={()=>{
              props.getSalads(props.e.sname)
              MarkSalad()
             }} className={MarkSaladState? 'bcgreen':""}>{props.e.sname}</p>
     
        </div>
     
      
      );
}

export default SaladOne;
