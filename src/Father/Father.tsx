import { useContext, useState } from "react";
import Child from "../Child/Child";
import { TextContext } from "../TextContext/TextContext";

const Father = () => {
  const textContext = useContext(TextContext);
  const [valInput, setValInput] = useState("");

  const handleSetText = () => {
    if (textContext?.setText) {
      textContext.setText(valInput);
    }
  };

  return (
    <>
      <Child />
      <input
        type="text"
        onChange={(e) => setValInput(e.target.value)}
        value={valInput}
      />
      <button onClick={handleSetText}>Update state</button>
    </>
  );
};

export default Father;

