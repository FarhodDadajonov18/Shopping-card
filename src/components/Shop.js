import React, {useEffect, useContext} from 'react'
import { ShopContext } from '../context';
import {API_URL, API_KEY} from "../components/config";
import Loader from './Loader';
import '../index.css'
import GoodList from './GoodList';
import Cart from './Cart';
import BasketList from './BasketList';

function Shop () {

  const { setGoods, loading, isBusketShow } = useContext(ShopContext);


useEffect(()=>{
  fetch(API_URL, { headers: { Authorization: API_KEY }})
  .then(response => response.json())
  .then(data => {setGoods(data.featured);
  })
  
},[]);


  return (
    <div className='content'>
         <Cart />
        { loading ? <Loader /> : <GoodList /> }
        { isBusketShow && <BasketList /> }
    </div>  
  )
  }

export default Shop;