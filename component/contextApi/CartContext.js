"use client";
import React, { createContext, useState } from "react";
import data from "../data/data";

export const CartDataContext = React.createContext();

const CartContext = ({ children }) => {
  const [item, setItem] = useState([]);
  const [dataList, setDataList] = useState(data);
  const [totalPrice, setTotalPrice] = useState();
  const [ispage, setIsPage] = useState(true);

  const handlerPrice = () => {
    let price = item.reduce((acc, priceItem) => acc + priceItem.totalPrice, 0);
    setTotalPrice(price);
    // console.log("price", totalPrice);
  };
  const handlerAddtoCart = (proItem) => {
    const findItem = item.find((data) => {
      return data === proItem;
    });
    if (findItem) {
      alert("already exist");
    } else {
      item.push(proItem);
    }
    // setItem((prevItem) => [...prevItem, i]);
  };
  const handlerCartPage = () => {
    if (item.length === 0) {
      console.log("empty");
    } else {
      handlerPrice();
    }
    return setIsPage(false);
  };
  return (
    <>
      <CartDataContext.Provider
        value={{
          item,
          setItem,
          totalPrice,
          dataList,
          setDataList,
          ispage,
          setIsPage,
          setTotalPrice,
          handlerPrice,
          handlerAddtoCart,
          handlerCartPage,
        }}
      >
        {children}
      </CartDataContext.Provider>
    </>
  );
};
export default CartContext;
