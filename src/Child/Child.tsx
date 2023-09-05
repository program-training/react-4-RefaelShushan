import { useContext } from "react";
import { TextContext } from "../TextContext/TextContext";

const Child = () => {
  const textContext = useContext(TextContext);
  const text = textContext ? textContext.text : "Default Text";

  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

export default Child;

