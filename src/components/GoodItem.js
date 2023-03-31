import React, { useContext }  from 'react'
import { ShopContext } from '../context';

function GoodItem(props) {
  const {id, name, description, price, full_background} = props;

  const {addToBusket} = useContext(ShopContext);
  
  return (
    <div className='card' id ={id}>
      <div className="card-img">
        <img className='img' src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className='card-title'>{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className='btn' onClick={()=>addToBusket({id,name,price})}>Buy</button>
        <span className='right'>{price} $</span>
      </div>
    </div>
  
  )
}

export default GoodItem;