import {  NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './nav.css'


function Nav() {
  const dispatch = useDispatch();
  const [openNavState,setOpenNavState] = useState(false);


  function openNave(){
    setOpenNavState(!openNavState)
  }

  return (
    <div className="posSticky padd bcwhite zz ">
      <div className="flexrow bet">
        <div className="logo">
          <h1>חמידו</h1>
        </div>

     <div className="navSide">
      <div onClick={openNave} className="buttonOpenNav">
        open 
      </div>
      <div className={openNavState? 'activeNav flexcol':'closeNav flexcol'}>
      <div onClick={openNave} className="buttonOpenNav">
        close 
      </div>
          <NavLink to='/store'>store</NavLink>
          <NavLink to='/register'>create</NavLink>
          <NavLink to='/store'>store</NavLink>
          <NavLink to='/store'>store</NavLink>
        </div>
     </div>
      </div>
     
      

   
    </div>
  
  );
}

export default Nav;
