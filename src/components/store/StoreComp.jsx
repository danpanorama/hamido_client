import '../../App.css';
import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { setStoreProductsAction } from '../../Redux/Actions/storeAction';

function StoreComp() {

    const dispatch = useDispatch();
    const items = useSelector((state) => state.store);
  
    useEffect(()=>{
      getDataFromServer()
    },[])
  
    function getDataFromServer(){
      dispatch(setStoreProductsAction())
    }
   


  return (
    <div className="App">
        <h1>store comp</h1>
        
 {items.store_list.map((e)=>{
    return(
        <div className="div">{e.name}</div>
    )
 })}
    </div>
  );
}

export default StoreComp;
