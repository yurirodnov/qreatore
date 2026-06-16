// src/context/StateProvider.tsx

import React, { createContext, useState, useContext } from "react";
import { validateInput } from "../lib/validateData";
import type { ReactNode } from "react";

interface StateContextType {
  userInput: string;
  isQrGenerated: boolean;
  isInputValid: boolean;
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
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  const [isQrGenerated, setQrGenerated] = useState<boolean>(false);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setUserInput(value);
    setIsInputValid(value === "" || validateInput(value));
    console.log("User input:", userInput);
  };

  const clearUserInput = () => {
    if (userInput !== "") {
      setUserInput("");
      setIsInputValid(true);
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
      value={{
        userInput,
        isQrGenerated,
        isInputValid,
        handleUserInput,
        clearUserInput,
        handleQrGeneration,
        handleQrReset,
      }}
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
