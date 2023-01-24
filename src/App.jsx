import logo from './logo.svg';
import './App.css';
import NavRoute from './navbar/NavRout';
import {useDispatch,useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div className="App">
     <NavRoute/>
   
     {cart.cart_List.length > 0?

  <div className="addToCart2">
<div className="add flexcol center">
ש"ח{cart.total_price} הזמנה

</div>

  </div>
     :
     
     ''}
    </div>
  );
} 

export default App;
