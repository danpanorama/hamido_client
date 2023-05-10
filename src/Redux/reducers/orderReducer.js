import * as actionTypes from "../contents/orderContent";

const initialState = {
    orders: [],
    total_orders: 0,


};

const store = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ORDER:
            const order = {
                ...state,
            };
            if(action.data.msg){
                return order
            }
            if(action.data.orders <= 0){
                return order
            }
            order.orders =  action.data.cart_List
            order.total_orders = order.orders.length
            return order;

            case actionTypes.REMOVEORDER:
                const removeOrder = {
                    ...state,
                };
               let removeArray =  removeOrder.orders.filter((e)=>{
                    return e.orderid != action.data
                })
                removeOrder.orders = removeArray
                return removeOrder;
            

            case actionTypes.CLEARORDERS:
                const clearorder = {
                    ...state,
                };
                clearorder.orders = []
               
                return order;

    



        case actionTypes.ADD_ORDER:
            const addorder = {
                ...state,
            };
            
            if(action.data){
            addorder.orders =  action.data
            addorder.total_orders = addorder.orders.length
        }
            return addorder;




        default:
            return state

    }
}

export default store