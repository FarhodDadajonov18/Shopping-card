import React, {useContext} from 'react'
import { ShopContext } from '../context';

const Cart = () => {
  const {order, handleBusketShow = Function.prototype} = useContext(ShopContext);

   const quantity = order.length;
   
  return (
    <div className='cart blue darken-4 white-text' onClick={handleBusketShow}>
      <i className="material-icons">add_shopping_cart</i>
      {quantity ? ( <span className='cart-quantity'>{quantity}</span> ) : ( null )}
    </div>
  )
}     

export default Cart;