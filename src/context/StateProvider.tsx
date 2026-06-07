// src/context/StateProvider.tsx

import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
import type { QRCode } from "qrcode";

interface StateContextType {
  userInput: string;
  isQrGenerated: boolean;
  handleUserInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleQrGeneration: () => void;
}

interface StateProviderProps {
  children: ReactNode;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

export const StateProvider = ({ children }: StateProviderProps) => {
  const [userInput, setUserInput] = useState<string>("");
  const [isQrGenerated, setQrGenerated] = useState<boolean>(true);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setUserInput(value);
    console.log("User input:", userInput);
  };

  const handleQrGeneration = () => {
    setQrGenerated((prev) => !prev);
  };

  return (
    <StateContext.Provider value={{ userInput, isQrGenerated, handleUserInput, handleQrGeneration }}>
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
