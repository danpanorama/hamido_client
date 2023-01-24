import '../../App.css';
import { useEffect, useState } from "react";
import DropDown from './DropDown';
import {useDispatch,useSelector} from "react-redux";


function StoreCard(props) {
  const cart = useSelector((state) => state.cart);
  const [isInCart,setIsInCart] = useState({})
  const [index,setIndex] = useState([])


useEffect(()=>{
checkIfInCart()
},[props.addToCart])


function checkIfInCart(){

  let count = 0
cart.cart_List.map((e,i)=>{

  if(props.item.mid == e.mid ){
    count++
    let obj = {
      bool:true,
      amount:count,

    }
    setIndex([...index,i])
    setIsInCart(obj)
  }
})





}


  return (
  <div id='card' className={isInCart.bool?'bcblu   card overflowhidden': 'card overflowhidden'}  >
     <div  onClick={()=>{props.dropdown(props.item.mid)}}className={'  flexrow bet grid-row'}  >

        <div className="price ">
        <h3 className="h3">{props.item.productname}</h3>
        <p className="p cb">  {props.item.mprice} ש"ח </p> 
        
        </div>
   
        <div className="image border-radiuce20">
<img src={props.item.mimg} className='img' alt="" /> 
        </div>
        </div> 
  
         <DropDown index={index}  isInCart={isInCart} addToCart={props.addToCart}  item={props.item} list={props.saladsList} dropdownState={props.dropdownState}/>
  
  </div>
  );
}

export default StoreCard;
