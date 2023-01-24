import '../../App.css';
import { useEffect, useState } from "react";

import {useDispatch,useSelector} from "react-redux";

function SaladsDropdown(props) {

  const [ StateUse,setStateUse] = useState(false)

    const salads = useSelector((state) => state.store);
    function gangeState(){

        setStateUse(!StateUse)

    }

    useEffect(()=>{
    
    
        setStateUse(false)

    },[props.clearStates])


  return (
   

                <div className={StateUse? "salads flexrow alignCenter bcblu":"salads flexrow alignCenter"} onClick={()=>{ 
                    props.addSalads(props.salad) 
                    gangeState()
                  }} ><p className={StateUse? "bcblue active":"active"} ></p><p className="p">{props.salad.sname}</p></div>
      

        
 
  );
}

export default SaladsDropdown;
