import "../../App.css";
import { useEffect, useState } from "react";
import SaladsList from "./SaladsList";
import { useDispatch, useSelector } from "react-redux";

function DropDown(props) {
  const [changeFlage, setChangeFlage] = useState(false);
  const [saladsState, setSaladState] = useState([]);
  const [flagIndexState, setFlagIndex] = useState(0);

  const cart = useSelector((state) => state.cart);

  //  function clearStates(){
  //   setChangeFlage(!changeFlage)
  //  }
  function flagIndex(){

    setFlagIndex(props.index.length);
  }

  useEffect(()=>{ 
    flagIndex()
  },[props.addToCart])
  function addSalads(e) {
    let name = e.sname;
    let id = e.sid;
    let flag = false;

    for (let i = 0; i < saladsState.length; i++) {
      if (saladsState[i].id == id) {
        flag = true;
      }
    }

    if (flag) {
      saladsState.filter((e) => {
        return e.id != id;
      });

      setSaladState(saladsState);
    } else {
      let obj = [...saladsState, { id: id, name: name }];
      setSaladState(obj);
    }
    flag = false;
  }

  function clearState() {
    setSaladState([]);
    setChangeFlage(!changeFlage);
  }
  function selectFromCartBack(e) {
  

  let salads= cart.cart_List[flagIndexState].salads
 setSaladState(salads)
setChangeFlage(!changeFlage)

if(flagIndexState <= 0){
  return flagIndexState
}else {
  setFlagIndex(flagIndexState - 1);

}
   
    
  }

  return (
    <div
      className={
        props.dropdownState.id == props.item.mid
          ? "dropdown flexcol center"
          : "closeDropDown flexcol center"
      }
    >
      <br />

      <SaladsList
        clearStates={changeFlage}
        addSalads={addSalads}
        list={props.list}
        saladsState={saladsState}
      />

      <div
        className={
          props.isInCart.bool
            ? "addToCartWithDifferent flexrow center tac"
            : "addToCart flexrow center tac"
        }
      >
     
       
          
            {props.isInCart.bool ? 
            (
       <div className="flexrow">
        <button onClick={selectFromCartBack}  id={flagIndexState -1} >{flagIndexState >= 0 ? 0 : flagIndexState -1 }</button>
               <div
              className="Button "
              onClick={() => {
                props.addToCart(props.item, saladsState);
                clearState();
              }}
            >
                <div className="amount">
                    <p className="p">
                      הוסף להזמנה עם תוספות שונות {flagIndexState + 2}{" "}
                    </p>
                  </div>
                  {props.item.servingway} {props.item.productname}
            </div>
            <button  id={flagIndexState }>{flagIndexState +2 }</button>
       </div>
            ) : 
            <div
            className="Button "
            onClick={() => {
              props.addToCart(props.item, saladsState);
              clearState();
            }}
          >
           
                  <p className="p">
                  הוסף להזמנה
                  </p>
                  {props.item.servingway} {props.item.productname}
          </div>}
     
        
      

    



      </div>
    </div>
  );
}

export default DropDown;
