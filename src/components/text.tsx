import React from "react";
import "./text.css";

interface ITextProps {
    title: string;
}

interface ITextState {
    textValue: string;
    textList: string[];
}

export class Text extends React.Component<ITextProps, ITextState> {
    constructor(props: ITextProps) {
        super(props);
        this.state = {
            textList: [],
            textValue: ""
        }
    }

    private onAddText = () => {
        if(this.state.textValue == "") return;
        const newTextArray = this.state.textList;
        newTextArray.push(this.state.textValue);
        this.setState({textList: newTextArray, textValue: ""})
    }

    render(): React.ReactNode {
        return (
            <div className="textContainer">
                <h3>{this.props.title}</h3>
                <div className="inputContainer">
                    <input onChange={(e) => this.setState({textValue: e.target.value})} value={this.state.textValue} />
                    <button onClick={this.onAddText}>Klicka här</button>
                </div>
                <div className="textListContainer">
                    {this.state.textList.map(t => {
                        return <p>{t}</p>
                    })}
                </div>
            </div>
        )
    }
}