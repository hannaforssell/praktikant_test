import React from "react";
import "./box.css"

interface IBoxProps {
    color: string;
    onClick: () => void;
}

export const Box = ({ color, onClick }: IBoxProps) => {
    return <div onClick={onClick} className="box" style={{ backgroundColor: color }}></div>
}