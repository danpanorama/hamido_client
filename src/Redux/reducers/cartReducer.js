import * as actionTypes from "../contents/cartContent";

const initialState = {
  cart_List: [],
 total_price:0,
 length:0

};

const store = (state = initialState, action) => {
  switch (action.type) {


   

  
    case actionTypes.ADD_TO_CART:
      const add = {
        ...state,
      };


      add.total_price += action.data.data.pprice
     


      add.cart_List = [...add.cart_List , action.data]
      add.length = add.cart_List.length
      return add;



    case actionTypes.CLEAR_CART:
      const clear = {
        ...state,
      };
        clear.cart_List = []
        clear.total_price = 0
      return clear;








    default:
      return state

  }
}

export default store