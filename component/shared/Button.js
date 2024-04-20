"use client";
import data from "../data/data";
import { useContext } from "react";
import { CartDataContext } from "../contextApi/CartContext";
function Button({ text }) {
  const { setDataList } = useContext(CartDataContext);
  const handleCategory = (cate) => {
    console.log(cate);
    if (cate === "All") {
      setDataList(data);
      console.log(data);
    } else {
      const filteredData = data.filter((item) => {
        console.log("item", item);
        return item.category.toUpperCase() === cate.toUpperCase();
      });
      setDataList(filteredData);
      console.log(filteredData);
    }
  };
  return (
    <>
      <button
        className="bg-slate-300 rounded-3xl p-3 transition duration-300 ease-in-out hover:bg-slate-500 active:bg-slate-700"
        onClick={() => handleCategory(text)}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
