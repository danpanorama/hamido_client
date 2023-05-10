import './App.css';
import './css/media.css'
import NavRoute from './navbar/NavRout';
import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from 'react';
import OrderList from './components/store/OrderList';
import ChangeOrder from './components/order/ChangeOrder';
import { LOGOUT, STILL_CONNECT } from './Redux/contents/usersContent';
import { getorders, getordersbyid, usersee } from './Redux/Actions/orderAction';
import { CLEARORDERS } from './Redux/contents/orderContent';


function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order);
  const user = useSelector((state) => state.users);
  const err = useSelector((state) => state.err);
  const [orderWindowState,setOrderWindowState] = useState(false)

  useEffect(()=>{
   dispatch({type:STILL_CONNECT})
  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      getuserOrders()
    }, 5000);
    return () => clearInterval(interval);
  }, [user]);

  function getuserOrders(){
    if(user.is_Log){  
        dispatch(getordersbyid(user));
    }
   
  }

function logout(){
  dispatch({type:LOGOUT})
  dispatch({type:CLEARORDERS})

}

function userSee(e){
  dispatch(usersee(e))

}

  return (
    <div className="App">
   

           {err.msg ? err.msg : ''}
     <NavRoute logout={logout} />
   
{user.is_Log?
<div className="">
  
{order.orders.length > 0 ? 
    
    <div className="">
    {order.orders.map((e)=>{
     
      return(
        <div className=
        {e.activeorder == 0 ? 
          ('bcpurple')
          :(e.activeorder == 1) ? 
          ('bcyellow')
          :(e.activeorder == null) ?
          ('bcred')
        :
        (e.activeorder == 2) ?
          ('bcgreen')
        :''}>
          {e.activeorder == null ? 
          <button onClick={()=>{
            userSee(e.orderid)
          }} >הבנתי</button>
          :''}
          {e.orderid}
        </div>
      )
    })}
    </div>
   :
   ''
   }
</div>
:''}

    </div>
  );
} 

export default App;
