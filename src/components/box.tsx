import "./box.css"

interface IBoxProps {
  color: string;
  text?: string;
}

export const Box = ({ color, text }: IBoxProps) => {
  return <div className="box" style={{ backgroundColor: color }}><p>{ text }</p></div>
}
