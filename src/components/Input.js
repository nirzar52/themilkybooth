import { React } from "react";


export const Input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className="input-box" {...props.elementConfig} value={props.value} required />;
            break;
        case ('textarea'):
            inputElement = <textarea className="input-box" {...props.elementConfig} value={props.value} required />;
            break;
        case ('select'):
            inputElement = (<select className="input-box" value={props.value} required>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>{option.displayValue}</option>
                ))}
            </select>);
            break;
        default:
            inputElement = <input className="input-box" {...props.elementConfig} value={props.value} required />;

    }

    return (
        <section className="cell large-4">
            <label>{props.label}</label>
            { inputElement}
        </section>
    )
}

export default Input;