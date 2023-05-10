import "../../App.css";
import { useEffect, useState } from "react";
import PlaceOrder from "../order/PlaceOrder";
import axiosConfig from "../../config/AxiosConfig";

function ChangeOrder(props) {


  return (
    <div className="grid-1-1 padd drtl">
      <br />

      {props.cart.cart_List.map((e) => {
        console.log(e);

        return (
          <div id={e.pid} className="">
            <h2 className="p">
              {e.ServWayState} {e.data.pname}
            </h2>

            {e.SaladState.map((salad) => {
              return <p className="">{salad}</p>;
            })}
          </div>
        );
      })}

      <br />
      <br />

      <button onClick={props.buy} >בצע הזמנה</button>
    </div>
  );
}

export default ChangeOrder;
