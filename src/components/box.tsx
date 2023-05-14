import React from "react";
import "./box.css"

interface IBoxProps {
  color: string;
  text?: string;
  onClick: () => void;
}

export const Box = ({ color, text, onClick }: IBoxProps) => {
  return <div onClick={onClick} className="box" style={{ backgroundColor: color }}><p>{ text }</p></div>
}
