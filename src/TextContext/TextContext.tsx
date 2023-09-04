import React, { createContext } from "react";

export const TextContext = createContext<{
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
  } | null>(null);
  