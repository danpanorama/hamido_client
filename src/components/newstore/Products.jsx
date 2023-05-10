import "../../App.css";
import "../../css/store.css";
import "../../css/dropdown.css";
import SaladsComp from "./SaladsComp";
import ServingWayComp from "./ServingWayComp";
import { useState } from "react";
import DropDown from "./DropDown";
import {useDispatch,useSelector} from "react-redux";
import { addToCartAction } from "../../Redux/Actions/cartActions";

function Product(props) {
  const [ServWayState, setServWayState] = useState("");
  const [SaladState, setSaladState] = useState([]);
  const [DropdownActive, setDropdownActive] = useState(0);
  const [clearStateBtn,setClearState] = useState(false)
  const dispatch = useDispatch();
  function getSalads(e){
   
    if(SaladState.length >= 4){
      return console.log('you have more then 3')
    }
    if(SaladState.length == 0){
     return setSaladState([e])
    }
  if(SaladState.includes(e)){
    const index = SaladState.indexOf(e); 
    if (index !== -1) { 
        SaladState.splice(index, 1); 
    }
    console.log(SaladState)
  }else{
     setSaladState([...SaladState,e])
     console.log([...SaladState,e])
  }
 
   
   
    
  }

  function getServWay(e) {
    setServWayState(e);
  }

  function addToCart(e) {
    if (SaladState.length <= 0 || ServWayState == "") {
      return console.log("not ready");
    } 
    else{
    dispatch(addToCartAction({data:e, SaladState, ServWayState}))

      setClearState(!clearStateBtn)
      setSaladState([])
      setServWayState('')
    }
    
    console.log(e, SaladState, ServWayState)
   
  }


  


 function openDropdown(){
    if(props.e.pid == DropdownActive){
        return closeDropdown()
    }
    console.log(DropdownActive)
    setDropdownActive(props.e.pid)
 }

 function closeDropdown(){
    setDropdownActive(0)

 }

  return (
    <div className="drtl">
     
          <div key={props.e.pname} className="div">
            <h2 onClick={openDropdown} > {props.e.pname}</h2>

            <DropDown clearStateBtn={clearStateBtn} getSalads={getSalads} getServWay={getServWay} id={props.e.pid} DropdownActive={DropdownActive} addToCart={addToCart} e={props.e} SaladsState={props.SaladsState} ServWayState={props.ServWayState} />

           
          </div>
    
    </div>
  );
}

export default Product;
