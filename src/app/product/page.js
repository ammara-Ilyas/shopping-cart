"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../../component/header/header";
import Cart from "../../../component/cart/Cart";
import Product from "../../../component/product/MyProduct";
function page() {
  const [item, setItem] = useState([]);
  const [ispage, setIsPage] = useState(true);
  const [totalPrice, setTotalPrice] = useState();

  const handlerPrice = () => {
    let price = item.reduce((acc, priceItem) => acc + priceItem.totalPrice, 0);
    setTotalPrice(price);
    console.log("price", totalPrice);
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
    console.log("ok");
    if (item.length === 0) {
      console.log("empty");
    } else {
      handlerPrice();
    }
    return setIsPage(false);
  };

  return (
    <div>
      <Navbar
        length={item.length}
        handlerCartPage={handlerCartPage}
        setIsPage={setIsPage}
      />

      {ispage ? (
        <Product handlerAddtoCart={handlerAddtoCart} />
      ) : (
        <Cart
          item={item}
          setItem={setItem}
          handlerPrice={handlerPrice}
          totalPrice={totalPrice}
        />
      )}
    </div>
  );
}

export default page;
