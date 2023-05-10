import '../App.css';
import StoreComp from '../components/newstore/StoreComp';
import StoreComp3 from '../components/store/StoreComp';
import axiosConfig from '../config/AxiosConfig'
import { useEffect, useState } from "react";
import ChangeOrder from '../components/order/ChangeOrder';
import {useDispatch,useSelector} from "react-redux";
import { getordersbyid, order } from '../Redux/Actions/orderAction';

function Store() {
  const [ProductState,setProductState] = useState([]);
  const [SaladsState,setSaladState] = useState([]);
  const [ServWayState,setServWayState] = useState([]);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.users);

  const [orderWindowState,setOrderWindowState] = useState(false)

  function openOrderWindow(){

    setOrderWindowState(!orderWindowState)
  }
  
async function getServWays(){
try {
  await axiosConfig
    .get("/sevingway")
    .then((res) => {
      if (res.data.err) {
        return console.log('err ')
      } else {
  return setServWayState(res.data.all)
      
      }
    })
    .catch((err) => {
      console.log(err )
    });
} catch (e) {
  console.log(e )
}
}

async function getSalads(){
try {
  await axiosConfig
    .get("/salads")
    .then((res) => {
      if (res.data.err) {
     console.log(res.data.err)
      } else {
     return setSaladState(res.data.all)
      
      }
    })
    .catch((err) => {
        console.log(err)
    });
} catch (e) {
   console.log(e)
}
}

async function getProducts(){
try {
  await axiosConfig
    .get("/products")
    .then((res) => {
      if (res.data.err) {
     console.log('err')
      } else {
  return setProductState(res.data.all) 
      
      }
    })
    .catch((err) => {
      console.log(err)
    });
} catch (e) {
  console.log(e)
}
}
const dispatch = useDispatch()
useEffect(()=>{

getServWays() 
getProducts()
getSalads()
if(user.users_info.userid){
  dispatch(getordersbyid(user))
}


},[])


function buy(){
  openOrderWindow()
  dispatch(order({cart:cart,user:user}))

}



  return (
    <div className="App">
        <StoreComp ProductState={ProductState} SaladsState={SaladsState} ServWayState={ServWayState} />

{cart.cart_List.length > 0?

<div className={orderWindowState?"addToCart2 windowOpen":' addToCart2'}>
<div onClick={openOrderWindow} className="add flexcol center">
ש"ח{cart.total_price} הזמנה

</div>

<div className={orderWindowState?"ListOfOrder":'opacity0'}>
<ChangeOrder  buy={buy} cart={cart} saladsList={SaladsState} servList={ServWayState} />


</div>

</div>
   :
   
   ''}

    </div>
  );
}

export default Store;
