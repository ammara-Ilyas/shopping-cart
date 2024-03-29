"use client";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import data from "../../../../component/data/data";
function page() {
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  // console.log(pathname);
  // const newPath = `/${locale}${pathname}`;
  // console.log("newPath", newPath);
  console.log(data[2]);
  const { title, image, description, price, rating, category, quantity } =
    data[2];
  const des = description.split(" ");
  console.log(des);
  const descrip = des
    .map((item) => {
      return item[0].toUpperCase() + item.slice(1);
    })
    .join(" ");
  const cat = category.split(" ");
  console.log(cat);
  const categories = cat
    .map((item) => {
      return item[0].toUpperCase() + item.slice(1);
    })
    .join(" ");
  return (
    <>
      <div className="card w-3/4 mx-auto mt-20 bg-base-100 shadow-xl  p-4 transition flex overflow-hidden ">
        <figure className="basis-1/2 w-10/12">
          <img src={image} alt="pro" className="basis-1/2 w-full h-full" />
        </figure>
        <div className="basis-1/2 ml-9 card-body flex justify-evenly flex-col">
          <h2 className="text-bold text-2xl">
            <b>{title}</b>
          </h2>
          <p>{descrip}</p>
          <div className="flex justify-between m-3">
            <p>
              <b>{categories}</b>
            </p>{" "}
            <p>
              <b>Quantity : {quantity}</b>
            </p>
          </div>
          <div className=" flex justify-between m-3">
            <button className="bg-blue-700 p-2 rounded-lg text-white hover:bg-blue-500">
              Price : {price}$
            </button>
            <button className="bg-blue-700 p-3 rounded-lg  text-white hover:bg-blue-500">
              Rating :{rating.rate}
            </button>
          </div>
          <button className="bg-red-700 p-3 w-full hover:bg-red-500 active:bg-red-950 active:text-white">
            Add to cart
          </button>
          <button className="bg-red-700 p-3 w-full hover:bg-red-500 active:bg-red-950 active:text-white">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}
export default page;
// function pageNum({ params }) {
//   return <div>My Post: {params.slug}</div>;
// }
// export default pageNum;
