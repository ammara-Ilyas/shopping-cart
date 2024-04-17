import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import logo from "../../image/logo.jpg";
import Icon from "../../image/cart.jpg";
import { CartDataContext } from "../contextApi/CartContext";
function Header() {
  const { item, handlerCartPage, setIsPage } = useContext(CartDataContext);
  const [cartNo, setCartNo] = useState(item.length);
  useEffect(() => {
    console.log(item);
    setCartNo(item.length);
  }, [item]);
  return (
    <div>
      <nav className="border-4 flex justify-between px-16 py-3 duration-75 sticky top-0 z-40 bg-slate-50">
        <div className="col-span-2" onClick={() => setIsPage(true)}>
          <Image src={logo} alt="logo" height={50} width={50} />
        </div>
        <div
          className="col-span-5 text-end border-blue-950 border-2 px-3 relative flex justify-center"
          onClick={handlerCartPage}
        >
          <span className="bg-red-600 rounded-full absolute px-2 hover:bg-red-800 hover:text-white cursor-pointer">
            {cartNo}
          </span>
          <Image src={Icon} alt="cart-icon" height={30} width={30} />
        </div>
      </nav>
    </div>
  );
}

export default Header;
