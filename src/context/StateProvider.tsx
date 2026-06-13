// src/context/StateProvider.tsx

import React, { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

interface StateContextType {
  userInput: string;
  isQrGenerated: boolean;
  handleUserInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearUserInput: () => void;
  handleQrGeneration: () => void;
  handleQrReset: () => void;
}

interface StateProviderProps {
  children: ReactNode;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

export const StateProvider = ({ children }: StateProviderProps) => {
  const [userInput, setUserInput] = useState<string>("");
  const [isQrGenerated, setQrGenerated] = useState<boolean>(false);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setUserInput(value);
    console.log("User input:", userInput);
  };

  const clearUserInput = () => {
    if (userInput !== "") {
      setUserInput("");
      handleQrReset();
    }
  };

  const handleQrGeneration = () => {
    setQrGenerated(true);
    console.log("Is qr generated", isQrGenerated);
  };

  const handleQrReset = () => {
    setQrGenerated(false);
  };

  return (
    <StateContext.Provider
      value={{ userInput, isQrGenerated, handleUserInput, clearUserInput, handleQrGeneration, handleQrReset }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): StateContextType => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("No state context");
  }

  return context;
};
