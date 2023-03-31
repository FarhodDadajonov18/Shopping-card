import React, {useContext} from "react";
import { ShopContext } from "../context";

const BasketItem = (props) => {
  const { id,name,price,quantity } = props;
  
  const {removeFromBusket, incrementQuantity, decrementQuantity} = useContext(ShopContext);

  return (
    <li className="collection-item list-unstyled ">
      <span>{name} x {quantity} = {price * quantity} <b>$</b></span>
        <div className="item-control">
          <button
            class=" waves-effect waves-light btn"
            onClick={() => incrementQuantity(id)}
          >
            <i class="material-icons left">exposure_plus_1</i> ADD
          </button>
          <button
            class="waves-effect waves-light btn"
            onClick={() => decrementQuantity(id)}
          >
            <i class="material-icons left">exposure_minus_1</i>REMOVE
          </button>
          <button className="delete-item">
            <i
              className="material-icons basket-delete delete-icon"
              onClick={() => removeFromBusket(id)}
            >
              delete
            </i>
          </button>
        </div>
    </li>
  );
};

export default BasketItem;
