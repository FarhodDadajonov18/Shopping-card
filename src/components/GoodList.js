import React, { useContext } from "react";
import { ShopContext } from "../context";
import GoodItem from "./GoodItem";
import Loader from "./Loader";

function GoodList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <Loader />;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default GoodList;
