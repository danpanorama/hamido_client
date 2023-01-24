import * as actionTypes from "../contents/cartContent";

const initialState = {
  cart_List: [],
 total_price:0,
 id:0

};

const store = (state = initialState, action) => {
  switch (action.type) {


    // case actionTypes.SET_STORE_ITEMS:
    //   const store_items = {
    //     ...state,
    //   };

    //  if(action.data){
    //   store_items.cart_List = action.data.allItems
    //   store_items.store_nav = action.data.servingWaysList
    //   store_items.salads_list = action.data.saladslist
    //  }else{
    //     store_items.cart_List = []

    //  }

    //   return store_items;

  
    case actionTypes.ADD_TO_CART:
      const add = {
        ...state,
      };
      add.total_price += action.data.mprice
      action.data.objectid = add.id


      add.cart_List = [...add.cart_List , action.data]
      add.id++
      return add;



    case actionTypes.CLEAR:
      const clear = {
        ...state,
      };
        clear.cart_List = []
        clear.id = 0
      return clear;








    default:
      return state

  }
}

export default store