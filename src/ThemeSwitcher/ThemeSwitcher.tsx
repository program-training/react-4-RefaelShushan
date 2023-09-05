import { useContext } from 'react';
import { ThemeContext } from "../TextContext/themeContext";


const ThemeSwitcher = () => {
  const themeContext = useContext(ThemeContext);

  const HandleOnChange = () => {
    themeContext?.mod === "Dark" ? themeContext.setMod("Light") : themeContext?.setMod("Dark");
  }
  console.log(themeContext?.mod)

  return (
    <button style={{ margin: "60px" }} onClick={HandleOnChange}>Changer</button>
  )
}

export default ThemeSwitcher