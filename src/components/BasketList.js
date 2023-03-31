import React,{useContext} from 'react';
import { ShopContext } from '../context';
import BasketItem from './BasketItem';

const BasketList = () => {
  const {order = [], handleBusketShow = Function.prototype } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => sum + (el.price * el.quantity), 0);

  return (
    <div className='bsk'>
     <ul className="collection basket-list">
      <li className="collection-item active">Basket</li>
        {
          order.length ? order.map(item =>(
               <BasketItem  key={item.id} {...item} /> 
        )) : 
          <li className='collection-item'>Busket is empty</li>
        } 
  
      <li className="collection-item"><b>Total Price :</b> {totalPrice} $</li>
      <i className='material-icons basket-close' onClick={handleBusketShow}>close</i>
    </ul>
    
    </div>
  )
}

export default BasketList;


