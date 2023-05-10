import "../../App.css";
import "../../css/store.css";
import "../../css/dropdown.css";
import SaladsComp from "./SaladsComp";
import ServingWayComp from "./ServingWayComp";
import { useState } from "react";
function DropDown(props) {
 

 

  return (
    <div className={props.DropdownActive == props.id ? 'open' : 'close'}>
     
            <ServingWayComp
              getServWay={props.getServWay}
              ServWayState={props.ServWayState}
              clearStateBtn={props.clearStateBtn}
            />
            <SaladsComp getSalads={props.getSalads} SaladsState={props.SaladsState} clearStateBtn={props.clearStateBtn} />

            <button onClick={()=>{
              props.addToCart(props.e)
             

            }}>add to cart</button>
      
    </div>
  );
}

export default DropDown;
