import '../../App.css';
import StoreCard from './StoreCard';
import { useEffect, useState } from "react";
import PlaceOrder from '../order/PlaceOrder';

function OrderList(props) {
  const [dropdownState,setDropDownState] = useState({state:false,id:0});
  function dropdown(e){
   if(e == dropdownState.id){
    return closeDropdown()
   }
    setDropDownState({id:e,state:true});
 }
 function closeDropdown(){
  setDropDownState({id:0,state:false});
 }
  return (
    <div className="grid-1-1 padd drtl">

<br />
      
        {props.list.map((e)=>{
         
                 return(
                  <div id={e.servingwayid} className="">

                 
                    <PlaceOrder  addToCart={props.addToCart} key={e.pid}  dropdown={dropdown} dropdownState={dropdownState} item={e} /> </div>
            )
            
           
        })}








        <br /><br /><br /><br /><br />

    </div>
  );
}

export default OrderList;
