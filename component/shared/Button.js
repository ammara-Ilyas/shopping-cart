import React from "react";

function Button({ text }) {
  return (
    <>
      <button className="bg-slate-300 rounded-3xl p-3 transition duration-300 ease-in-out hover:bg-slate-500 active:bg-slate-700">
        {text}
      </button>
    </>
  );
}

export default Button;
