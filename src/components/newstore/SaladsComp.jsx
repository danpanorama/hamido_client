import '../../App.css';
import '../../css/store.css';
import '../../css/dropdown.css';
import { useState } from 'react';
import SaladOne from '../salads/SaladOne';

function SaladsComp(props) {


  return (
    <div className="">
        {props.SaladsState.map((e)=>{
        return(
        <SaladOne clearStateBtn={props.clearStateBtn} getSalads={props.getSalads} SaladsState={props.SaladsState} e={e}/>
        )
      })}
    </div>
 
  
  );
}

export default SaladsComp;
