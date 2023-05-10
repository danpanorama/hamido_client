import '../../App.css';
import '../../css/store.css';
import '../../css/dropdown.css';
import { useEffect, useState } from 'react';
import ServwaysOne from '../servwaycomp/ServwaysOne';

function ServingWayComp(props) {

  const [ServMark,setServMark] = useState('')
   
  function MarkServingWay(e){
   

    setServMark(e)

  }
  useEffect(()=>{
setServMark(false)
  },[props.clearStateBtn])

  return (
    <div className="">
        {props.ServWayState.map((e)=>{
        return(
        <ServwaysOne ServMark={ServMark} MarkServingWay={MarkServingWay}  getServWay={props.getServWay} e={e}/>
        )
      })}
    </div>
  );
}

export default ServingWayComp;
