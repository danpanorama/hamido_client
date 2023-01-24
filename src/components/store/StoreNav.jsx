import '../../App.css';
import { NavLink } from "react-router-dom";
function StoreNav(props) {

 


  return (
    <div className="storeNav drtl  grid-row-nav positionSticky">
        {props.list.map((e)=>{
            return(
                <a href={'#'+e.serid}   key={e.serid} className="p alink tac link cw  border-left">{e.sername}</a>
            )
        })}



    </div>
  );
}

export default StoreNav;
