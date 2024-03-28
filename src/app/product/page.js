"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../../component/header/header";
import data from "../../../component/data/data";
import Image from "next/image";
import Cart from "../../../component/cart/Cart";
import Product from "../../../component/product/MyProduct";
function page() {
  const [item, setItem] = useState([]);
  const [ispage, setIsPage] = useState(true);

  const handlerNum = (i) => {
    console.log("item", i);
    // setItem((preItem) => [...preItem, i]);
    item.push(i);
    // setItem((prevItem) => [...prevItem, i]);
    console.log(item);
    console.log(ispage);
  };

  return (
    <div>
      <Navbar item={item} setIsPage={setIsPage} />

      {ispage ? (
        <Product handlerNum={handlerNum} />
      ) : (
        <Cart item={item} setItem={setItem} />
      )}
    </div>
  );
}

export default page;
