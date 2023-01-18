import * as actionTypes from "../contents/storeContent";

const initialState = {
  store_list: [],

};

const store = (state = initialState, action) => {
  switch (action.type) {


    case actionTypes.SET_STORE_ITEMS:
      const store_items = {
        ...state,
      };

     if(action.data){
      store_items.store_list = action.data.allItems
     }else{
        store_items.store_list = []

     }

      return store_items;

  


    case actionTypes.CLEAR:
      const clear = {
        ...state,
      };
        clear.store_list = []
      return clear;








    default:
      return state

  }
}

export default store