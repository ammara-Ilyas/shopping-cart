import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../image/logo.jpg";
import Icon from "../../image/cart.jpg";

function Header({ item, setIsPage }) {
  console.log(item.length);
  const [itemLength, setItemLength] = useState(item.length); // Initialize with 0

  // useEffect(() => {
  //   if (item) {
  //     // Update item length whenever the item prop changes
  //     setItemLength(item.length);
  //   }
  // }, [item]);

  return (
    <div>
      <nav className="border-4 flex justify-between px-16 py-3">
        <div className="col-span-2" onClick={() => setIsPage(true)}>
          <Image src={logo} alt="logo" height={50} width={50} />
        </div>
        <div
          className="col-span-5 text-end border-blue-950 border-2 px-3 relative flex justify-center"
          onClick={() => setIsPage(false)}
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