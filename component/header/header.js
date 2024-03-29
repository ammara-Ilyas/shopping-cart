import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../image/logo.jpg";
import Icon from "../../image/cart.jpg";

function Header({ item, setIsPage }) {
  // const [itemLength, setItemLength] = useState(item.length);
  const [totalPrice, setTotalPrice] = useState(0);

  const handlerCartPage = () => {
    console.log("ok");
    if (item.length === 0) {
      console.log("empty");
    } else {
      let price = item.reduce(
        (acc, priceItem) => acc + priceItem.totalPrice,
        0
      );
      setTotalPrice(price);
      console.log("price", totalPrice);
    }
    return setIsPage(false);
  };
  return (
    <div>
      <nav className="border-4 flex justify-between px-16 py-3">
        <div className="col-span-2" onClick={() => setIsPage(true)}>
          <Image src={logo} alt="logo" height={50} width={50} />
        </div>
        <div
          className="col-span-5 text-end border-blue-950 border-2 px-3 relative flex justify-center"
          onClick={handlerCartPage}
        >
          <span className="bg-red-600 rounded-full absolute px-2 hover:bg-red-800 hover:text-white cursor-pointer">
            {item.length}
          </span>
          <Image src={Icon} alt="cart-icon" height={30} width={30} />
        </div>
      </nav>
    </div>
  );
}

export default Header;
