import React from "react";
import { BsSuitcase2 } from "react-icons/bs";
import { IoGiftOutline } from "react-icons/io5";
import { PiPizzaLight } from "react-icons/pi";

const GlobalContext = React.createContext();

export const globalContextValue = {
  categoryData: [
    { id: 1, label: "Entertainment", logo: IoGiftOutline },
    { id: 2, label: "Food", logo: PiPizzaLight },
    { id: 3, label: "Travel", logo: BsSuitcase2 },
  ],
};

export default GlobalContext;
