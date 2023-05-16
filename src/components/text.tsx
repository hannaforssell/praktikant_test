import { useState } from "react";
import "./text.css";

interface ITextProps {
  title: string;
}

interface ITextState {
  textValue: string;
  textList: string[];
}

export const Text = (props: ITextProps) => {
  const [text, setText] = useState("");
  const [texts, setTexts] = useState<string[]>([]);

  const handleInput = (state: ITextState) => {
    setTexts(texts => texts.concat(state.textValue));

    setText("");
  }

  return (
    <div className="textContainer">
      <h3>{props.title}</h3>
      <div className="inputContainer">
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => handleInput({ textValue: text, textList: texts })}>Klicka här</button>
      </div>
      <div className="textListContainer">
        {
          texts.map((t) => {
            return <p>{t}</p>
          })
        }
      </div>
    </div>
  );
}
