import '../../App.css';
import StoreCard from './StoreCard';
import { useEffect, useState } from "react";

function StoreList(props) {

 
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
        <div  className="header"><p className="h2">פיתה</p></div>
        {props.list.map((e)=>{
            if(e.servingway == 'פיתה'){
                 return(
                  <div id={e.servingwayid} className="">

                 
                    <StoreCard  addToCart={props.addToCart} key={e.mid}  dropdown={dropdown} dropdownState={dropdownState} item={e} /> </div>
            )
            }
           
        })}


<br />
<div id='בגט' className="header"><p className="h2">בגט</p></div>
        {props.list.map((e)=>{
            if(e.servingway == 'בגט'){
                 return(
<div id={e.servingwayid}>
<StoreCard addToCart={props.addToCart} key={e.mid}  dropdown={dropdown} dropdownState={dropdownState} item={e} />

</div>
                  )
            }
           
        })}

<br/>
<div id='צלחת' className="header"><p className="h2">צלחת</p></div>
        {props.list.map((e)=>{
            if(e.servingway == 'צלחת'){
                 return(
<div key={e.mid} id={e.servingwayid}>
<StoreCard addToCart={props.addToCart}   dropdown={dropdown} dropdownState={dropdownState} item={e} />

</div>
                  )
            }
           
        })}



        <br /><br /><br /><br /><br />

    </div>
  );
}

export default StoreList;
