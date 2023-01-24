import '../../App.css';
import { useEffect, useState } from "react";

import {useDispatch,useSelector} from "react-redux";
import SaladsDropdown from '../salads/SaladsDropdown';

function SaladsList(props) {


    const salads = useSelector((state) => state.store);
   



  return (
    <div className='w100 flexcol center'>

        {salads.salads_list.map((e)=>{
            return(
             <SaladsDropdown saladsState={props.saladsState} clearStates={props.clearStates} key={e.sid} salad={e} addSalads={props.addSalads}/>
            )
        })}

        


 
    </div>
  );
}

export default SaladsList;
