import "./toggle.css";

interface IToggleProps {
    onFuncClick: () => void;
    onClassClick: () => void;
}

export const Toggle = ({onClassClick, onFuncClick}: IToggleProps) => {
    return (
        <div className="toggleBox">
            <button onClick={onFuncClick}>FUNC</button>
            <button onClick={onClassClick}>CLASS</button>
        </div>
    )
}