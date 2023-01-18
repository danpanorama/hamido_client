import {  NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



function Nav() {
  const dispatch = useDispatch();

  return (
    <div className=" ">
     
      <NavLink to='/store'>store</NavLink>

   
    </div>
  
  );
}

export default Nav;
