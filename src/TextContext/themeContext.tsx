import { createContext, useState } from "react";


type ModThemeContext = "Dark" | "Light";

interface TypeThemeContext {
  mod: ModThemeContext;
  setMod: React.Dispatch<React.SetStateAction<ModThemeContext>>;
}

interface ModContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<TypeThemeContext | null>(null);

const ModContextProvider: React.FC<ModContextProviderProps> = (props) => {
  const [mod, setMod] = useState<ModThemeContext>("Dark");

  return (
    <ThemeContext.Provider value={{ mod, setMod }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export  {ModContextProvider};
