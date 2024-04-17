import React from "react";
import data from "../data/data";
import Button from "../shared/Button";
const Buttons = () => {
  const cate = data.map((item) => {
    return item.category;
  });
  let category = Array.from(new Set(cate));
  category = category.map((item) => {
    return item[0].toUpperCase() + item.slice(1);
  });
  return (
    <div className="p-6 text-xl flex justify-center gap-6 items-center">
      <Button text="All" />
      {category.map((btn) => (
        <Button text={btn} />
      ))}
    </div>
  );
};

export default Buttons;
