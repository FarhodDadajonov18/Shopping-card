import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();


const initialState = {
  goods: [],
  loading: false,
  order: [],
  isBusketShow : false,
};


 export const ContextProvider = ({children}) =>{
    const [value , dispatch] = useReducer(reducer, initialState)
        
         value.addToBusket = (item) => {
          dispatch({ type: "ADD_TO_BUSKET", payload: item })
         }
 
         value.incrementQuantity = (itemID) =>{
           dispatch({type: "INCREMENT_QUANTITY", payload:{id:itemID}})
         }
         
         value.decrementQuantity = (itemID) =>{
          dispatch({type:"DECREMENT_QUANTITY", payload:{id:itemID}})
         }

         value.handleBusketShow = () => {
          dispatch({type:"TOGGLE_BUSKET"})
         }

         value.removeFromBusket = (itemID) =>{
          dispatch({type:"REMOVE_FROM_BUSKET", payload:{id:itemID}})
         }

         value.setGoods = (data) => {
          dispatch({ type:'SET_GOODS', payload:data })
         }

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};