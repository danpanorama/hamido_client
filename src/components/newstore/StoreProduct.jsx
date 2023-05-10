import "../../App.css";
import "../../css/store.css";
import "../../css/dropdown.css";
import SaladsComp from "./SaladsComp";
import ServingWayComp from "./ServingWayComp";
import { useState } from "react";
import Product from "./Products";


function StoreProduct(props) {
 


 
 
  return (
    <div className="">
      {props.ProductState.map((e) => {
      
        return (
          
         <Product ServWayState={props.ServWayState} SaladsState={props.SaladsState} e={e} />
        );
      })}
    </div>
  );
}

export default StoreProduct;
