import { React } from "react";


export const Input = (props) => {

    let inputElement = null;

    switch (props.inputtype) {
        case ('input'):
            inputElement = <input className="input-box" {...props} />;
            break;
        case ('textarea'):
            inputElement = <textarea className="input-box" {...props} />;
            break;
        default:
            inputElement = <input className="input-box" {...props} />;

    }

    return (
        <section className="cell large-4">
        <label>{props.label}</label>
        { inputElement }
        </section>
    )
}

export default Input;