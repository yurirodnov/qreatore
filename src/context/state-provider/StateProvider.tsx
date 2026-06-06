import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

interface StateContextType {
  userInput: string;
  handleUserInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface StateProviderProps {
  children: ReactNode;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

export const StateProvider = ({ children }: StateProviderProps) => {
  const [userInput, setUserInput] = useState<string>("");

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setUserInput(value);
  };

  return <StateContext.Provider value={{ userInput, handleUserInput }}>{children}</StateContext.Provider>;
};

export const useStateContext = (): StateContextType => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("No state context");
  }

  return context;
};
