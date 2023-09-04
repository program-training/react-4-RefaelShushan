import { useState } from "react";
import Father from "../Father/Father";
import {TextContext} from "../TextContext/TextContext"


const Grandpa = () => {
  const [text, setText] = useState<string>("Hello world!!!");

  return (
    <TextContext.Provider value={{ text, setText }}>
      <Father />
    </TextContext.Provider>
  );
};

export default Grandpa;
