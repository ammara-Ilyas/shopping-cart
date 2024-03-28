"use client";
import data from "../data/data";
import React, { createContext, useContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  //   const [product, setProduct] = useState(data);
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};
