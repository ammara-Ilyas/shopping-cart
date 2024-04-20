// import React, { useContext } from "react";
import Navbar from "../../../component/layout/header";
import Product from "../../../component/widgets/MyProduct";
import Buttons from "../../../component/widgets/Buttons";
function page() {
  return (
    <div>
      <Navbar />
      <Buttons />
      <Product />
      {/* {ispage ? <Product /> : <Cart />} */}
    </div>
  );
}

export default page;
