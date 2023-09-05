import  { useRef, useState } from 'react';
import Father from "../Father/Father";
import {TextContext} from "../TextContext/TextContext"
import { ThemeContext } from "../TextContext/themeContext";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"

type ModThemeContext = "Dark" | "Light";

const Grandpa = () => {
  const [text, setText] = useState<string>("Hello world!!!");
  const [mod, setMod] = useState<ModThemeContext>("Dark");
  const myRefDiv = useRef<HTMLDivElement | null>(null);

  if (myRefDiv.current) {
    if (mod === "Dark") {
      myRefDiv.current.style.background = "black";
      myRefDiv.current.style.color = "white";
    } else {
      myRefDiv.current.style.background = "white";
      myRefDiv.current.style.color = "black";
    }
  }


  return (
      <div ref={myRefDiv} style={{ margin: "0px auto", width: "1280px", height: "600px", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", flexDirection: "column" }}>
        <TextContext.Provider value={{ text, setText }}>
          <Father />
        </TextContext.Provider>
        <ThemeContext.Provider value={{ mod, setMod }}>
          <ThemeSwitcher />
        </ThemeContext.Provider>
      </div>
    );
};

export default Grandpa