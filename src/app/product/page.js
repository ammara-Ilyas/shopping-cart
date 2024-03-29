"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../../component/header/header";
import Cart from "../../../component/cart/Cart";
import Product from "../../../component/product/MyProduct";
function page() {
  const [item, setItem] = useState([]);
  const [ispage, setIsPage] = useState(true);
  const [totalPrice, setTotalPrice] = useState("");

  const handlerAddtoCart = (proItem) => {
    // setItem((preItem) => [...preItem, i]);
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
  const hanlerProductPage = (item, i) => {};
  return (
    <div>
      <Navbar item={item} setIsPage={setIsPage} />

      {ispage ? (
        <Product handlerAddtoCart={handlerAddtoCart} />
      ) : (
        <Cart item={item} setItem={setItem} />
      )}
    </div>
  );
}

export default page;
