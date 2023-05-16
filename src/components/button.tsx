import "./button.css";
import { useState } from 'react'
import { Box } from './box';

interface IButtonProps {
  text: string;
}

export const Button = ({ text }: IButtonProps) => {
  const [boxes, setBoxes] = useState<JSX.Element[]>([]);

  const addBoxes = () => {
    if (boxes.length >= 20) {
      return;
    }

    let boxesToAdd = boxes.length == 0 ? 10 : Math.floor(Math.random() * 10) + 1;
    boxesToAdd = Math.min(boxesToAdd, 20 - boxes.length)

    for (let i = 0; i < boxesToAdd; i++) {
      const boxColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
      const newBox = <Box color={boxColor} />;

      setBoxes(boxes => boxes.concat(newBox));
    }
  }

  return (
    <>
      <button onClick={addBoxes}>{text}</button>
      <div>
        <div className="box-container">
          {boxes}
        </div>
      </div>
    </>
  )
}
