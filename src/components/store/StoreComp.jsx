import '../../App.css';
import '../../css/store.css'
import '../../css/dropdown.css'

import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { setStoreProductsAction } from '../../Redux/Actions/storeAction';
import StoreList from './StoreList';
import StoreNav from './StoreNav';
import { addToCartAction } from '../../Redux/Actions/cartActions';

function StoreComp() {

    const dispatch = useDispatch();
    const items = useSelector((state) => state.store);

    // const [saladsState,setSaladState] = useState([])
  
    useEffect(()=>{
      getDataFromServer()
    },[])
  
    function getDataFromServer(){
      dispatch(setStoreProductsAction())
    }


    function addToCart(e,salads){  
      e.salads = salads
      dispatch(addToCartAction(e));
    

    }
   
 

  return (
    <div className="">
  <StoreNav list={items.store_nav} />
        
<StoreList addToCart={addToCart}  list={items.store_list} />
    </div>
  );
}

export default StoreComp;
