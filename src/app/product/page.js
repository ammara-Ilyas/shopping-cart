"use client";
import React, { useContext } from "react";
import Navbar from "../../../component/layout/header";
import Cart from "../../../component/widgets/CartCom";
import Product from "../../../component/widgets/MyProduct";
import { CartDataContext } from "../../../component/contextApi/CartContext";
function page() {
  const { ispage } = useContext(CartDataContext);

  return (
    <div>
      <Navbar />
      <Product />
      {/* {ispage ? <Product /> : <Cart />} */}
    </div>
  );
}

export default page;
