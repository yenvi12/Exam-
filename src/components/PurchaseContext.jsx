import React, { createContext, useState } from "react";

export const PurchaseContext = createContext();

export const PurchaseProvider = ({ children }) => {
  const [purchasedItems, setPurchasedItems] = useState([]);

  return (
    <PurchaseContext.Provider value={{ purchasedItems, setPurchasedItems }}>
      {children}
    </PurchaseContext.Provider>
  );
};